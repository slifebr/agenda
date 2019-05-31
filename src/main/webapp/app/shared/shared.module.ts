import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgendaSharedLibsModule, AgendaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AgendaSharedLibsModule, AgendaSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [AgendaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgendaSharedModule {
  static forRoot() {
    return {
      ngModule: AgendaSharedModule
    };
  }
}
