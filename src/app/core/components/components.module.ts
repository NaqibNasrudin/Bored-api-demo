import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../libs/material.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, MaterialModule, TranslateModule],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ComponentsModule {}
