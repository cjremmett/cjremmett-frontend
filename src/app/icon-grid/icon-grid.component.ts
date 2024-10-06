import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'icon-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-grid.component.html',
  styleUrl: './icon-grid.component.css'
})
export class IconGridComponent
{
  arrayOfData: string[] = ["1", "2", "3", "4", "5"];
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