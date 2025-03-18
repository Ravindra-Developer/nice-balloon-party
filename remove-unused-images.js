const fs = require("fs");
const path = require("path");

// 🔹 Define Directories
const imageDir = path.join(__dirname, "src/assets"); // Base assets directory
const searchDirs = ["src/app", "src/assets/styles"]; // Modify based on where images are referenced

const DRY_RUN = false; // Set to false to enable deletion

// 🔹 Function to get all image files recursively
function getAllImages(dir) {
    let results = [];
    fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
            results = results.concat(getAllImages(filePath)); // Recursively scan subdirectories
        } else if (/\.(png|jpe?g|svg|gif|webp)$/i.test(file.name)) {
            results.push(filePath);
        }
    });
    return results;
}

// 🔹 Function to get all project files recursively
function getAllFiles(dir) {
    let results = [];
    fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
            results = results.concat(getAllFiles(filePath)); // Recursively scan subdirectories
        } else if (/\.(html|scss|ts)$/i.test(file.name)) {
            results.push(filePath);
        }
    });
    return results;
}

// 🔹 Function to check if an image is used anywhere
function isImageUsed(imagePath) {
    const relativePath = path.relative(imageDir, imagePath).replace(/\\/g, "/");
    const imageName = path.basename(imagePath); // Only the file name

    for (const dir of searchDirs) {
        const files = getAllFiles(dir);
        for (const file of files) {
            const content = fs.readFileSync(file, "utf8");

            // Check multiple possible reference formats
            if (
                content.includes(relativePath) || // Example: 'assets/images/logo.png'
                content.includes("assets/" + relativePath) || // Example: '/assets/images/logo.png'
                content.includes(imageName) // Example: 'logo.png' (failsafe for inline styles or dynamic refs)
            ) {
                return true;
            }
        }
    }
    return false;
}

// 🔹 Function to remove empty folders
function removeEmptyFolders(dir) {
    let isEmpty = true;
    fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
            if (!removeEmptyFolders(filePath)) {
                isEmpty = false;
            }
        } else {
            isEmpty = false;
        }
    });

    if (isEmpty) {
        if (!DRY_RUN) {
            fs.rmdirSync(dir);
            console.log(`🗑️ Removed empty folder: ${dir}`);
        } else {
            console.log(`❌ Empty folder found (dry run): ${dir}`);
        }
    }
    return isEmpty;
}

// 🔹 Get all images & check usage
const imageFiles = getAllImages(imageDir);
let deletedCount = 0;

imageFiles.forEach((image) => {
    if (!isImageUsed(image)) {
        if (DRY_RUN) {
            console.log(`❌ Unused: ${image}`);
        } else {
            fs.unlinkSync(image);
            console.log(`🗑️ Deleted: ${image}`);
            deletedCount++;
        }
    }
});

// 🔹 Remove empty folders
removeEmptyFolders(imageDir);

console.log(`\n✅ Scan complete! ${DRY_RUN ? "No files deleted (dry run)." : `Deleted ${deletedCount} unused images and cleaned empty folders.`}`);
