import { Component, Input  } from '@angular/core';

@Component({
  selector: 'banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent
{
  @Input() navigationLink!: string;
  @Input() imageLink!: string; 
}
