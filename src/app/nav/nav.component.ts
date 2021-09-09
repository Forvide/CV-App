import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  search: string = '';

  skillsList: string[] = [
    'C#', 'Angular', 'Asp.net Core', 'EntityFramework Core', 'MS SQL Server'
  ];

  registerMode: boolean = false;
     
  constructor() { }

  ngOnInit(): void {
  }  
}
