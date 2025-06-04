/* eslint-disable @typescript-eslint/naming-convention */
import { Location } from '@angular/common';
import { Component, isDevMode } from '@angular/core';
import moment, { Moment } from 'moment';

@Component({
    selector: 'app-release-notes',
    templateUrl: './release-notes.component.html',
    styleUrls: ['./release-notes.component.scss'],
})
export class ReleaseNotesComponent {
    ReleaseType = ReleaseType;
    TabType = TabType;
    isDev = isDevMode();
    tabs = !this.isDev ? [TabType['Release Update']] : [TabType['Release Update'], TabType['Known Issues']];

    // Latest always on top, only 1 show: true at a time
    releaseNoteList: ReleaseNoteModel[] = [
        {
            version: 'v0.0.1',
            date: moment('2024-09-03'),
            detail: [
                {
                    type: ReleaseType['New Features'],
                    list: [],
                },
            ],
            show: true,
        },
    ];

    knownIssues = [];

    selectedTab = this.tabs[0];

    constructor(private location: Location) { }

    showMore(list: ReleaseNoteModel): void {
        list.show = !list.show;
        this.releaseNoteList.forEach((item) => {
            if (item.version != list.version) item.show = false;
        });
    }

    back(): void {
        this.location.back()
    }
}

enum TabType {
    'Release Update',
    'Known Issues',
}

enum ReleaseType {
    'New Features', //new modules, new feature
    'Bug Fixes',
    'Improvements', //enhancement to the existing module
}

interface ReleaseNoteDetailModel {
    type: ReleaseType;
    list: ReleaseItemModel[];
}

interface ReleaseNoteModel {
    version: string;
    date: Moment;
    detail: ReleaseNoteDetailModel[];
    show: boolean;
}

interface ReleaseItemModel {
    link: string;
    description: string;
    taskNo: number;
}
