import {NgModule} from '@angular/core';

import {PagesRoutingModule} from './pages-routing.module';
import {GarbageClassificationComponent} from './garbage-classification/garbage-classification.component';
import {SharedModule} from '../common/shared/shared.module';


@NgModule({
  declarations: [GarbageClassificationComponent],
  imports: [
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule {
}
