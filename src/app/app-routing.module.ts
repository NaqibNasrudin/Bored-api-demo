import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProductionGuard } from './core/services/guards/production-guard.service';
import { ReleaseNotesComponent } from './features/general/release-notes/release-notes.component';
import { HomeComponent } from './features/home/home.component';

const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'release-notes', component: ReleaseNotesComponent, title: 'Release Note', canActivate: [ProductionGuard] },
    { path: 'home', component: HomeComponent, title: 'Home', canActivate: [ProductionGuard] },
];

@NgModule({
    imports: [BrowserModule, CommonModule, RouterModule.forRoot(ROUTES)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
