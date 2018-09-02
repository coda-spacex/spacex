import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'launches',
    loadChildren: './main/launches/launches.module#LaunchesModule',
    data: {
      breadcrumb: 'Launches'
    }
  },
  {
    path: 'capsules',
    loadChildren: './main/capsules/capsules.module#CapsulesModule',
    data: {
      breadcrumb: 'Capsules'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
