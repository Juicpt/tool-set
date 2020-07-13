import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GarbageClassificationComponent} from './garbage-classification/garbage-classification.component';


const routes: Routes = [
  {path: '', redirectTo: 'garbageClassification', pathMatch: 'full'},
  {path: 'garbageClassification', component: GarbageClassificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
