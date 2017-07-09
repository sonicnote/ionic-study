import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  
  }

  onClick(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 300
    });
    loader.present((this.navCtrl.push(TabsPage)));
  }

}
