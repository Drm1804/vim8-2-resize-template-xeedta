import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';

import { ResizeModule } from './resize/resize.module';
import { ResizeService } from './resize/resize.service';
import config from './i-config.json';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ResizeModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [
    ResizeService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [ResizeService]
    },
  ]
})
export class AppModule { }

export function initializeApp(resizeService: ResizeService) {
  return () => resizeService.load(config);
}
