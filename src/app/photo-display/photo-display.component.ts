import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoDataService } from './photodata.service';
import { PhotoData } from './photodata.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-display',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './photo-display.component.html',
  styleUrl: './photo-display.component.css'
})
export class PhotoDisplayComponent  implements OnInit {
 
  constructor(private activatedRoute: ActivatedRoute, private photosService: PhotoDataService) { }
  
  photoData: PhotoData[] = [];
  formattedTime = '';

  ngOnInit(): void
  {
    this.activatedRoute.paramMap.subscribe(params => {
      let photoDataId = params.get("id");
      this.photosService.getPhotoData(photoDataId).subscribe((photoData) => {
        this.photoData = photoData;
        
        let date = new Date(0); // The 0 there is the key, which sets the date to the epoch
        date.setUTCSeconds(this.photoData[0].uploadTimestamp / 1000);
        console.log(date);
        console.log(this.photoData[0].uploadTimestamp);

        let month = date.toLocaleString('default', { month: 'long' });
        let day = date.getDate();
        let year = date.getFullYear();

        this.formattedTime = month + ' ' + day + ', ' + year;
      });
    });
  }
}
