import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {
  private baseUrl = 'https://cjremmett.com/api/photography/upload-photos';

  constructor(private http: HttpClient) { }

  upload(file: File, photoId : string, token: string): Observable<HttpEvent<any>>
  {
    const formData: FormData = new FormData();

    formData.append('photos', file);

    const req = new HttpRequest('PUT', this.baseUrl + '/' + photoId, formData, {
      headers: new HttpHeaders({
        'token': token
      }),
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}