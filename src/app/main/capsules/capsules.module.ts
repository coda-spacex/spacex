import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapsulesRoutingModule } from './capsules-routing.module';
import { CapsulesComponent } from './capsules.component';
import { CapsulesService } from '../../core/api/capsules/capsules.service';

@NgModule({
  imports: [
    CommonModule,
    CapsulesRoutingModule
  ],
  declarations: [
    CapsulesComponent
  ],
  providers: [
    CapsulesService
  ],
  exports: [
    CapsulesComponent
  ],
  entryComponents: [],
})
export class CapsulesModule { }
