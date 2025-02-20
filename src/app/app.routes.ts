import { Routes } from '@angular/router';
import { IconGridComponent } from './icon-grid/icon-grid.component';
import { IofficeComponent } from './ioffice/ioffice.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhotographyComponent } from './photography/photography.component';
import { PhotoDisplayComponent } from './photo-display/photo-display.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';


export const routes: Routes = [
    { path: '', component: IconGridComponent },
    { path: 'ioffice', component: IofficeComponent },
    { path: 'photography/upload', component: PhotoUploadComponent },
    { path: 'photography/:id', component: PhotoDisplayComponent },
    { path: 'photography', component: PhotographyComponent },
    { path: '**', component: PageNotFoundComponent}
  ];
