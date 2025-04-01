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

  photoResponse : Photo[] = [];
  photos: Photo[][] = [[]];

  ngOnInit(): void
  {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      // console.log('Tags: ' + queryParams['tags']);
      let query = '';
      if(queryParams['tags'] != null && queryParams['tags'] !== '')
      {
        query = '?tags= ' + queryParams['tags'];
      }
      this.photosService.getPhotos(query).subscribe((photos) => {
        this.photoResponse = photos;

        // Turn the 1D array into a 2D array so we can have five images per row
        let imagesPerRow = 5;
        for(let i = 0; i < Math.floor(this.photoResponse.length / imagesPerRow) + 1; i++)
        {
          for(let j = 0; j < imagesPerRow; j++)
          {
            if((i * imagesPerRow) + j < this.photoResponse.length)
            {
              if(this.photos.length <= i)
              {
                this.photos.push([])
              }

              this.photos[i][j] = this.photoResponse[(i * imagesPerRow) + j];
            }
          }
        }
      });
    });
  }
}
