import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePipe } from './pipes/example.pipe';



@NgModule({
  declarations: [
    ExamplePipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
