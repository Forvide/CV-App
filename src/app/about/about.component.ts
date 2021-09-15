import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  photo = 'https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-600w-518740741.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
