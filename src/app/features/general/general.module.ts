import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReleaseNotesComponent } from './release-notes/release-notes.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../core/libs/shared/shared.module';

@NgModule({
    declarations: [ReleaseNotesComponent],
    imports: [CommonModule, RouterModule, SharedModule, TranslateModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GeneralModule {}
