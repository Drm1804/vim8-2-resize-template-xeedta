import { Directive, Input, TemplateRef, ViewContainerRef, NgZone, OnInit } from '@angular/core';
import {ResizeService} from './resize.service';
import {Observable} from 'rxjs/Observable';

@Directive({ selector: '[ifViewportSize]' })
export class IfViewportSizeDirective implements OnInit{

    private localKey: string;
     
    constructor(private templateRef: TemplateRef<any>, 
                private viewContainer: ViewContainerRef,
                private resizeService: ResizeService,
                private ngzone: NgZone)
    { }

    ngOnInit() {
      this.resizeService.notify.subscribe(() => {
          this.checkShow(this.localKey);
        })
    }

    checkShow(condition: string) {
    if(this.resizeService.isSize(condition)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }
    
    @Input() set ifViewportSize(condition: string) {
      this.localKey = condition;
      this.checkShow(condition);
    }
}
