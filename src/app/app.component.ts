import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{
  ngOnInit(): void 
  {
    fetch('https://cjremmett.com/api/log-webpage-access?webpage=' + window.location.href, { method: 'POST' })
  }
}
