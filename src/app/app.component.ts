import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  apiKey: string            = environment.apiKey;
  authDomain: string        = environment.authDomain;
  databaseURL: string       = environment.databaseURL;
  projectId: string         = environment.projectId;
  storageBucket: string     = environment.storageBucket;
  messagingSenderId: string = environment.messagingSenderId;
  appId: string             = environment.appId;

  constructor() {
    const config = {
      apiKey: this.apiKey,
      authDomain: this.authDomain,
      databaseURL: this.databaseURL,
      projectId: this.projectId,
      storageBucket: this.storageBucket,
      messagingSenderId: this.messagingSenderId,
      appId: this.appId
    }
    firebase.initializeApp(config);
  }

}
