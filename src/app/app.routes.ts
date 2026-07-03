import { Routes } from '@angular/router';
import { About } from '../components/about/about';
import { Home } from '../components/home/home';
import { Contact } from '../components/contact/contact';
import { Resume } from '../components/resume/resume';
import { Certificates } from '../components/certificates/certificates';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'resume', component: Resume },
  { path: 'certificates', component: Certificates },
];
