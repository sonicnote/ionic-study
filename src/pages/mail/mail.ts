import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-mail',
  templateUrl: 'mail.html'
})
export class MailPage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    menu.enable(true);
  }

}
