import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
    DateAdapter,
    MAT_RIPPLE_GLOBAL_OPTIONS,
    MatNativeDateModule,
    MatRippleModule,
    NativeDateAdapter,
    RippleGlobalOptions,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export const GLOBAL_RIPPLE_CONFIG: RippleGlobalOptions = {
    disabled: true,
};

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSliderModule,
        MatSnackBarModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSliderModule,
        MatSnackBarModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    providers: [
        { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: GLOBAL_RIPPLE_CONFIG },
        { provide: DateAdapter, useClass: NativeDateAdapter },
    ],
})
export class MaterialModule {}
