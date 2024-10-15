import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { IconGridComponent } from "./icon-grid/icon-grid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, IconGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{
  constructor(private router: Router) {}
  
  ngOnInit(): void 
  {
    fetch('https://cjremmett.com/api/log-webpage-access?webpage=' + this.router.url, { method: 'POST' })
  }
}
