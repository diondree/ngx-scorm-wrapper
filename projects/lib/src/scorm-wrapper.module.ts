import { NgModule } from '@angular/core';
import { ScormWrapperService } from './public-api';
import { WindowRef } from './window-ref';

@NgModule({
  providers: [
    ScormWrapperService,
    WindowRef
  ],
  exports: [
  ]
})
export class ScormWrapperModule {
}
