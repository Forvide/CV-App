import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface CommentInterface {
  name: string,
  commentText: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('comment', [
    transition(':enter', [style({opacity: 0}), animate(1000, style({opacity: 1}))]),
    transition(':leave', [style({opacity: 1}), animate(1000, style({opacity: 0}))])
  ])]
})

export class AppComponent implements OnInit{
  
  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  });
  
  title = 'Amangeldy M CV';
  showCommentSection: boolean = false;
  
  comments: CommentInterface[] = [
    {name: 'Murat', commentText: 'Mytextasdfsadf', id: 1},
    {name: 'AlsoMurat', commentText: 'Mytextasdggadf', id: 2},
    {name: 'NotMurat', commentText: 'Myte123123gadf', id: 3},
  ]
  
  ngOnInit(): void {
    
  }

  inputComment(comment) {
    this.comments.unshift(comment);
  }

}
