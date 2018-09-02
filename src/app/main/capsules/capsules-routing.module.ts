import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsulesComponent } from './capsules.component';

const routes: Routes = [
    {
      path: '',
      component: CapsulesComponent,
      pathMatch: 'full'
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule
    ],
    declarations: []
})
export class CapsulesRoutingModule { }
