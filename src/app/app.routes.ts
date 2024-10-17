import { Routes } from '@angular/router';
import { IconGridComponent } from './icon-grid/icon-grid.component';
import { IofficeComponent } from './ioffice/ioffice.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: IconGridComponent },
    { path: 'ioffice', component: IofficeComponent },
    { path: '**', component: PageNotFoundComponent}
  ];