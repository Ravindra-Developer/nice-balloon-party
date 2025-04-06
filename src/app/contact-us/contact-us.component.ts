import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  providers: [MessageService]
})
export class ContactUsComponent {
  title = 'Contact us - Nice Balloon Party decoration';
  check: boolean = false;
  constructor(private fb: FormBuilder, private titleService: Title, private http: HttpClient, private messageService: MessageService) {
    this.titleService.setTitle(this.title);

    window.scrollTo(0, 0)
  }

  // contactusForm = this.fb.group({
  //   first_name: ['', Validators.required],
  //   last_name: ['', Validators.required],
  //   mobile_no: ["", [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$"), Validators.required]],
  //   email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required]],
  //   messege: ['', Validators.required],
  //   // check: ['', Validators.required],
  // })


  onMobileNoInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    // Use a regular expression to keep only numeric characters
    const sanitizedValue = inputValue.replace(/[^0-9]/g, '');
    if (inputValue !== sanitizedValue) {
      // If the input value was modified, update the input value
      input.value = sanitizedValue;
    }
  }

  // submitContactUs() {
  //   this.http.post('https://niceballoonparty.com/mixServer/public/api/sendMail', this.contactusForm.value).subscribe((res: any) => {
  //     this.check = false;
  //     this.contactusForm.reset();
  //     this.messageService.clear()
  //     this.messageService.add({ severity: 'success', summary: "Submitted Successfully" })
  //   }, (err: any) => {
  //     this.check = false;
  //     this.contactusForm.reset();
  //     this.messageService.clear()
  //     this.messageService.add({ severity: 'error', summary: "Internal Server Error.. please contact on mobile no " })
  //   })
  // }

}
