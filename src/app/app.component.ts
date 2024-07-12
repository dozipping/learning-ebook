import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learning-Ebook';
  news = new Array();
Expression: any;
Expression1: any;
Expression2: any;

  constructor() {
    this.news.push({
      title: 'Next JS Programming',
      content: 'Next JS Programming will start on 12 Jan.2024',
      active: true,
      important: 1,
      expire: '2024/4/30',
    });
    this.news.push({
      title: 'Angular Programming',
      content: 'Angular Programming will start on 13 Jan.2024',
      active: true,
      important: 2,
      expire: '2024/4/30',
    });
    this.news.push({
      title: 'Flutter Programming',
      content: 'Flutter Programming will start on 14 Jan.2024',
      active: true,
      important: 3,
      expire: '2024/4/30',
    });
  }
}


