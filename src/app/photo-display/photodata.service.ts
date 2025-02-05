import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoData } from './photodata.interface';

@Injectable({
  providedIn: 'root'
})

export class PhotoDataService {

  private baseUrl = 'https://cjremmett.com/api/photography/get-photo-data/';

  constructor(private http: HttpClient) {}

  getPhotoData(photoId: string | null): Observable<PhotoData[]> {
    return this.http.get<PhotoData[]>(this.baseUrl + photoId);
  }
}
