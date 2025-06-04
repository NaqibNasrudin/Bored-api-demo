/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BrowserUpdateService {
    loadBrowserUpdateScript(): void {
        // https://browser-update.org/customize.html
        const $buoop = {
            required: { i: 8, f: 25, o: 0, s: 9, c: 22 },
            reminder: 24,
            reminderClosed: 150,
            text: '', // custom text (html)
            newwindow: true,
            container: document.body,
            api: 2024.09,
        };

        (window as any).$buoop = $buoop;

        this.injectScript();
    }

    private injectScript(): void {
        const scriptElement = document.createElement('script');
        scriptElement.src = '//browser-update.org/update.min.js';
        scriptElement.async = true;

        document.body.appendChild(scriptElement);
    }
}
