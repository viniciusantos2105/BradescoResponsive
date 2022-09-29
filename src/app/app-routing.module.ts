import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefitsComponent } from './views/components/benefits/benefits.component';
import { BiaComponent } from './views/components/bia/bia.component';
import { BodyComponent } from './views/components/body/body.component';
import { PrimeComponent } from './views/components/prime/prime.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'benefits',
    component: BenefitsComponent
  },
  {
    path: 'prime',
    component: PrimeComponent
  },
  {
    path: 'bia',
    component: BiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
