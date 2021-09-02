import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommentInterface } from '../app.component';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Output() comment: EventEmitter<CommentInterface> = new EventEmitter<CommentInterface>();

  name: string;
  commentText: string;

  constructor() { }

  ngOnInit(): void {
  }

  addComment() {
    if (this.name.trim() && this.commentText.trim()) {
      let comment: CommentInterface = {name: this.name, commentText: this.commentText};
      this.comment.emit(comment);
      this.name = '';
      this.commentText = '';
    }
  }

}
