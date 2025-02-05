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

  ngOnInit(): void
  {
    this.activatedRoute.paramMap.subscribe(params => {
      let photoDataId = params.get("id");
      this.photosService.getPhotoData(photoDataId).subscribe((photoData) => {
        this.photoData = photoData;
        console.log(JSON.stringify(photoData));
        console.log(JSON.stringify(this.photoData));
      });
    });
  }
}
