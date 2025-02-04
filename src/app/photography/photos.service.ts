import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from './photos.interface';

@Injectable({
  providedIn: 'root'
})

export class PhotosService {

  private baseUrl = 'https://cjremmett.com/api/photography/get-photos';

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.baseUrl);
  }
}