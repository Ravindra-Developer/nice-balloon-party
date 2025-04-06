import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'services/:type', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-condition', component: TermsConditionComponent }, 
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

// ng generate module shared --route shared --module app.module.ts
// npm run build 