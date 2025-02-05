import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from './photos.service';
import { Photo } from './photos.interface';

@Component({
  selector: 'photography',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent implements OnInit
{
  constructor(private activatedRoute: ActivatedRoute, private photosService: PhotosService) {
  }

  photos: Photo[] = [];

  ngOnInit(): void
  {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      console.log('Tags: ' + queryParams['tags']);
      let query = '';
      if(queryParams['tags'] != null && queryParams['tags'] !== '')
      {
        query = '?tags= ' + queryParams['tags'];
      }
      this.photosService.getPhotos(query).subscribe((photos) => {
        this.photos = photos;
      });
    });
  }
}
