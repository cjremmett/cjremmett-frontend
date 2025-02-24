import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from './photo-upload-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-upload',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './photo-upload.component.html',
  styleUrl: './photo-upload.component.css'
})
export class PhotoUploadComponent {
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  constructor(private uploadService: FileUploadService) { }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }

  uploadFiles(): void {
  
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
  
    if (file) {
      this.uploadService.upload(file, this.uuid, this.apiToken).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            alert('Successful upload: ' + file.name);
          }
        },
        error: (err: any) => {
          alert('Failed upload: ' + file.name);
        }
      });
    }

    
  }

  apiToken = '';
  tags = '';
  uuid = '';
  async createPhoto(): Promise<void>
  {
    console.log(this.tags);
    let tagsArray = this.tags.split(',');
    let tagsJsonString = '{';
    for(const tag of tagsArray)
    {
      console.log(tag);
      let tagTemp = (tag.trim()).toLowerCase();
      console.log(tagTemp);
      tagsJsonString = tagsJsonString + '"' + tagTemp + '": true,';
    }
    if(tagsJsonString.slice(-1) === ',')
    {
      tagsJsonString = tagsJsonString.slice(0, -1);
    }
    tagsJsonString = tagsJsonString + '}';
    this.tags = tagsJsonString;

    const response = await fetch('https://cjremmett.com/api/photography/create-photo', {
      method: 'POST',
      headers: 
      {
        "Content-Type": "application/json",
        "token": this.apiToken,
      },
      body: tagsJsonString
    });
  
    let response_json = await response.json();
    if(response.status < 300)
    {
      window.alert("Created new photo with ID: " + response_json['uuid']);
      this.uuid = response_json['uuid'];
    }
    else
    {
      window.alert("Photo creation failed. Error message:\n\n" + JSON.stringify(response_json));
    }
  }
}
