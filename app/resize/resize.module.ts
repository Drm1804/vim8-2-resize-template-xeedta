import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { IfViewportSizeDirective, } from './if-viewport-size.directive';

import { ResizeService } from './resize.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ IfViewportSizeDirective ],
  exports: [ IfViewportSizeDirective ]
})
export class ResizeModule { }

