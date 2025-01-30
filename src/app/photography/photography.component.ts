import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'photography',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent {
  photos = 
  [
    {
      "_id": "679b9ce5d462b5cf45c325c3",
      "id": "34075325-8a92-4778-8515-7eebde95450f",
      "big_thumb": "big_thumb.png",
      "camera": "SONY - ILCE-7M2",
      "fNumber": "f/6.3",
      "focalLength": "600 mm",
      "full": "full.png",
      "iso": "400",
      "lens": "FE 200-600mm F5.6-6.3 G OSS",
      "raw": "raw.ARW",
      "shutterSpeed": "1/500",
      "small_thumb": "small_thumb.png",
      "tags": {
        "wildlife": true,
        "bird": true
      },
      "uploadTimestamp": "1737484270652"
    }
  ]

}
