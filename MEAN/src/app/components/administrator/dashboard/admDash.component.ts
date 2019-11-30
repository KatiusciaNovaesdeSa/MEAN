import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminDash',
  templateUrl: './adminDash.component.html',
  styleUrls: ['./adminDash.component.css']
})
export class AdminDashComponent implements OnInit {
  title='Administrator View'
  constructor() { }

  ngOnInit() {
  }

}
