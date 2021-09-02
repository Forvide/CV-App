import { Component, Input, OnInit } from '@angular/core';
import { CommentInterface } from '../app.component';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  @Input() comment: CommentInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
