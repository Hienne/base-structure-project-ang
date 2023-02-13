import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  
  constructor() {  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
    console.log('on init');
  }

}
