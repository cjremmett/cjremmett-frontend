import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'icon-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-grid.component.html',
  styleUrl: './icon-grid.component.css'
})
export class IconGridComponent
{
  arrayOfData: string[] = [
    '<a href="jellyfin"><img src="https://cjremmett.com/images/jellyfin.png"></a>',
    '<a href="transmission"><img src="https://cjremmett.com/images/transmission.png"></a>',
    '<a href="ioffice"><img src="https://cjremmett.com/images/hummingbird.png"></a>',
    '<a href="guacamole"><img src="https://cjremmett.com/images/guacamole.png"></a>',
    '<a href="https://homeassistant.cjremmett.com"><img src="https://cjremmett.com/images/homeassistant.png"></a>',
    '<a href="kavita"><img src="https://cjremmett.com/images/kavita.png"></a>'
  ];
  group = groupArray(this.arrayOfData, 3);
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