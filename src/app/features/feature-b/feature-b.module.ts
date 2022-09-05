import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BComponent } from './b/b.component';
import { FeatureBRoutingModule } from './feature-b-routing.module';


@NgModule({
  declarations: [
    BComponent
  ],
  imports: [
    CommonModule,
    FeatureBRoutingModule
  ]
})
export class FeatureBModule { }
