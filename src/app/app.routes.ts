import { Routes } from '@angular/router';
import { QrCodeComponent } from './main-content/qr-code/qr-code.component';
import { SkillsComponent } from './main-content/skills/skills.component';
import { SupportComponent } from './main-content/support/support.component';

export const routes: Routes = [
    {path: 'Qr', component: QrCodeComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'support', component: SupportComponent}
];
