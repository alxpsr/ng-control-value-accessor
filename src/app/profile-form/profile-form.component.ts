import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    console.log(1);
  }
}