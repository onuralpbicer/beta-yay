import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beta-yay';
  logged = false;
  username:string;
  password:string;

  constructor(
    private data:DataService,
  ) {}
  
  // test1() {
  //   this.data.getTest().then(
  //     (res:any) => {
  //       this.testing = res;
  //       console.log(res);
  //     },
  //     (res:any) => {
  //       this.testing = res;
  //     }

  //   );
  // }

  // test2() {
  //   this.data.postTest().then(
  //     (res:any) => {
  //       this.testing2 = res;
  //       console.log(res);
  //     },
  //     (res:any) => {
  //       this.testing2 = res;
  //     }

  //   );
  // }
  login() {
    var username = this.username;
    var password = this.password;

    this.data.login(username, password).then(
      () => {
        this.logged = true;
      },
      (res: any) => {
        this.logged = false;
      }
    )
  }
}
