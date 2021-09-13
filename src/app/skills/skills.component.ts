import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  search: string = '';

  skillsList: string[] = [
    'C#', 'Angular', 'Asp.net Core', 'EntityFramework Core', 'MS SQL Server'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
