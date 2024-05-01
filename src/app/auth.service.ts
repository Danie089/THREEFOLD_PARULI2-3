import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    signInEmail: string = '';
    canProceed = false;
    constructor() { }
    setAuthentication(auth:boolean){
      if (auth) {
        localStorage.setItem("SignedIn","true");
      }
    }
    canActivate() {
      return this.canProceed;
    }
  
    canDeactivate(){
      return this.canProceed = false;
    }
}
