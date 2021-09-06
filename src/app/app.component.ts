import { Component } from '@angular/core';

export interface CommentInterface {
  name: string,
  commentText: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  date: Date = new Date();
  title = 'Amangeldy M CV';
  showCommentSection: boolean = false;
  
  comments: CommentInterface[] = [
    {name: 'Murat', commentText: 'Mytextasdfsadf', id: 1},
    {name: 'AlsoMurat', commentText: 'Mytextasdggadf', id: 2},
    {name: 'NotMurat', commentText: 'Myte123123gadf', id: 3},
  ]

  inputComment(comment) {
    this.comments.unshift(comment);
  }

}
