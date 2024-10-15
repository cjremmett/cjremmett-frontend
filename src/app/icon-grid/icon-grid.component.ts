import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'icon-grid',
  standalone: true,
  imports: [CommonModule, IconComponent, BannerComponent],
  templateUrl: './icon-grid.component.html',
  styleUrl: './icon-grid.component.css'
})
export class IconGridComponent
{
  banners: string[][] = [
    ['https://fractalsoftworks.com/forum/index.php?topic=17094.0', 'https://cjremmett.com/images/starsector.png'],
  ];

  icons: string[][] = [
    ['jellyfin', 'https://cjremmett.com/images/jellyfin.png'],
    ['transmission', 'https://cjremmett.com/images/transmission.png'],
    ['ioffice', 'https://cjremmett.com/images/hummingbird.png'],
    ['guacamole', 'https://cjremmett.com/images/guacamole.png'],
    ['https://homeassistant.cjremmett.com', 'https://cjremmett.com/images/homeassistant.png'],
    ['kavita', 'https://cjremmett.com/images/kavita.png']
  ];
  iconRows = groupArray(this.icons, 3);
}

function groupArray<T>(data: Array<T>, n: number): Array<T[]> 
{
  let group = new Array<T[]>();
  for (let i = 0, j = 0; i < data.length; i++)
    {
      if (i >= n && i % n === 0)
        j++;
      group[j] = group[j] || [];
      group[j].push(data[i])
    }

  return group;
}