import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
    declarations: [DialogComponent],
    imports: [CommonModule, MaterialModule, TranslateModule],
    exports: [DialogComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
