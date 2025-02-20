import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-photo-upload',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './photo-upload.component.html',
  styleUrl: './photo-upload.component.css'
})
export class PhotoUploadComponent {
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
