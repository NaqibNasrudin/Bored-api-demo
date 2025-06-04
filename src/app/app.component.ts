import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BrowserUpdateService } from './core/services/browser-update.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'WebStarterKit';

    constructor(
        private translate: TranslateService,
        private browserUpdateService: BrowserUpdateService,
    ) {}

    ngOnInit(): void {
        this.initLanguage();
        this.initBrowserUpdate();
    }

    private initBrowserUpdate(): void {
        this.browserUpdateService.loadBrowserUpdateScript();
    }

    private initLanguage(): void {
        this.translate.addLangs(['en-US', 'zh-CN']);
        this.translate.setDefaultLang('en-US');
    }
}
