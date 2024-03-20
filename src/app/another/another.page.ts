import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-another',
  templateUrl: './another.page.html'
 
})
export class AnotherPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
