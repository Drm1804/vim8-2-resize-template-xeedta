import { Injectable, Output, EventEmitter } from '@angular/core';
import { IConfig } from '../i-config.i';

@Injectable()
export class ResizeService { 
    private sizeKey: string;
    private configs: IConfig;
    private sizePx: number;

    constructor() {}

    @Output() notify = new EventEmitter<any>();
    load(configs:IConfig) {
      this.configs = configs;
      this.setSizeKey();
    }

    setSizeKey() {
      const oldSizeKey = this.sizeKey;
      if(!this.configs || !this.sizePx) {
        return;
      }

      switch (true) {
        case (this.sizePx < this.configs.medium):
          this.sizeKey = 'small';
          break;
        
        case (this.configs.medium <= this.sizePx && this.sizePx < this.configs.large):
          this.sizeKey = 'medium';
          break;

        case (this.configs.large <= this.sizePx ):
          this.sizeKey = 'large';
          break;
      }

      if(oldSizeKey !== this.sizeKey) {
        this.notifyIfSizeChange();
      }
    }

    notifyIfSizeChange() {
      this.notify.emit(null);
    }

    isSize(size) {
      return this.sizeKey === size;
    }

    setSizePx(size: number){
      this.sizePx = size;
      this.setSizeKey();
    }
}


