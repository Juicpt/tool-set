import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  NzButtonModule,
  NzCardModule,
  NzGridModule,
  NzIconModule,
  NzMessageModule,
  NzSelectModule,
  NzSpinModule,
  NzUploadModule
} from 'ng-zorro-antd';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzUploadModule,
    NzMessageModule,
    NzCardModule,
    NzGridModule,
    NzSpinModule,
    NzSelectModule,
    NzIconModule
  ],
})
export class SharedModule {
}
