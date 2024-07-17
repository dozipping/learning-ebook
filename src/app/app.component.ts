import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { News } from './news';
import { TextRightDirective } from './text-right.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,TextRightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learning-Ebook';
  news = new Array();

  constructor() {
    this.news.push(
      new News(
        'Next JS Programming',
        'Next JS Programming will start on 12 Jan.2024',
        true,
        1,
        '2024/4/30'
      )
    );
    this.news.push(
      new News(
        'Angular Programming',
        'Angular Programming will start on 13 Jan.2024',
        true,
        2,
        '2024/4/30'
      )
    );
    this.news.push(
      new News(
        'Flutter Programming',
        'Flutter Programming will start on 13 Jan.2024',
        true,
        3,
        '2024/4/30'
      )
    );
  }
  public getActiveNews():News[]{
      var news_active = new Array();
      for(let item of this.news){
        if(item.active) news_active.push(item);
      }
      return news_active;
  };
  importStyle = {};
  getImporttStyle(important:number){
    return this.importStyle = {
      'font-size':important==1 ? '24px' : important==2?'18px':'12px',
      'color':important==1?'#FFFFFF':'',
      'background-color':important==1?'#39DB6A':''
    };
  }
}
