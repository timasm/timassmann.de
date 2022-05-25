import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SlideshowComponent } from './slideshow/slideshow.component';
import { ImprintComponent } from './imprint/imprint.component'
import { DataProtectionComponent } from './data-protection/data-protection.component';

const routes: Routes = [
  { path: '', component: SlideshowComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
