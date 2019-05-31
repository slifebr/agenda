import { NgModule } from '@angular/core';

import { AgendaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [AgendaSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [AgendaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AgendaSharedCommonModule {}
