import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, NzButtonModule],
})
export class SharedModule {
}
