import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesComponent } from './launches.component';
import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesService } from '../../core/api/launches/launches.service';

@NgModule({
  imports: [
    CommonModule,
    LaunchesRoutingModule
  ],
  declarations: [
    LaunchesComponent
  ],
  providers: [
    LaunchesService
  ],
  exports: [
    LaunchesComponent
  ],
  entryComponents: [],
})
export class LaunchesModule { }
