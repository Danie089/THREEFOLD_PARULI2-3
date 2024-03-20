import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-custom-page-with-id',
  templateUrl: './my-custom-page-with-id.page.html',
  styleUrls: ['./my-custom-page-with-id.page.scss'],
})
export class MyCustomPageWithIdPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
