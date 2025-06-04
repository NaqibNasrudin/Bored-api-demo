import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, TransferState } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './core/libs/shared/shared.module';
import { GeneralModule } from './features/general/general.module';
import { HomeComponent } from './features/home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        GeneralModule,
        ReactiveFormsModule,
        RouterModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en-US',
            extend: true,
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient, TransferState],
            },
        }),
        SharedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [provideHttpClient(withFetch(), withInterceptorsFromDi()), provideAnimationsAsync()],
    bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json?v=' + Date.now());
}
