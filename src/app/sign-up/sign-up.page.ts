import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  
  email:string = '';
  password:string = '';
  Confirm:string = '';
  constructor(private router:Router, private alertController:AlertController) { }
  
  ngOnInit() {
  }
async SignUp() {
 
  if (!this.email || !this.password || !this.Confirm ) {
  console.log('Missing username / password');
  }
  if(this.password !== this.Confirm) {
    alert('Password does not match');
    this.router.navigate(['/SignUp']);
  } 
  const auth = getAuth();
  createUserWithEmailAndPassword(auth,"test@gmail.com","password")
    .then((userCredential) => {
      const user = userCredential.user;
      this.presentAlert('Success', 'Sign up successfully');
      this.router.navigate(['/signin']);  
    })
    .catch((error) => {
      const errorCode= error.code;
      const errorMessage = error.massage;
    });
    this.email = '';
    this.password = '';
    this.Confirm = '';
  
  }  async presentAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: ['CLOSE']
    });
    await alert.present();
  }
}

