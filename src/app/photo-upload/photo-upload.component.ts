import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  standalone: true,
  imports: [],
  templateUrl: './photo-upload.component.html',
  styleUrl: './photo-upload.component.css'
})
export class PhotoUploadComponent {
  tags: string = '';
  async createPhoto(): Promise<void>
  {
    let tagsArray = this.tags.split(',')
    let tagsJsonString = '{';
    for(const tag of tagsArray)
    {
      let tagTemp = (tag.trim()).toLowerCase();
      tagsJsonString = tagsJsonString + '"' + tagTemp + '": true,'
    }
  }
}
