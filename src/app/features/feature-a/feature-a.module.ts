import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AComponent } from './a/a.component';
import { FeatureARoutingModule } from './feature-a-routing.module';


@NgModule({
  declarations: [
    AComponent
  ],
  imports: [
    CommonModule,
    FeatureARoutingModule
  ]
})
export class FeatureAModule { }
