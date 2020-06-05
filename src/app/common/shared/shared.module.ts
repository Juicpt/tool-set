import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NzButtonModule, NzCardModule, NzGridModule, NzMessageModule, NzSelectModule, NzSpinModule, NzUploadModule} from 'ng-zorro-antd';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {IconsProviderModule} from '../../icons-provider.module';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzUploadModule,
    NzMessageModule,
    NzCardModule,
    NzGridModule,
    NzSpinModule,
    NzSelectModule
  ],
})
export class SharedModule {
}
