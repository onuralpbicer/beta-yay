import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api_key = 'fKlyDUAJAj9QhBOVXJomR5vZxZEQj1123xq9Eh78';
  api_url = 'https://ui5wfbe5i0.execute-api.ap-southeast-2.amazonaws.com/test/';
  db_url = ''

  constructor(private http:HttpClient) { }

  login(username, password):Promise <any> {
    var promise = new Promise<any> ((resolve, reject) => {
      this.http.get('assets/users.json')
    });
    return promise;

  }

  // getTest():Promise<any> {
  //   console.log("hi");
  //   var promise = new Promise<any> ((resolve, reject) => {
  //     this.http.get('assets/users.json').toPromise().then(
  //       (res: any) => {
  //         console.log(res);
  //         console.log("hi3");
  //         resolve(res);
  //       },
  //       (res:any) => {
  //         reject(res);
  //       }
  //     );

  //   });
  //   console.log('hi2');
  //   return promise;
  // }

  // postTest():Promise<any> {
  //   // var options = {params: new HttpParams().set("test", "hi")};
  //   var promise = new Promise<any> ((resolve, reject) => {
  //     this.http.post(this.api_url + 'test-post', {"test": "hi"}).toPromise().then(
  //       (res: any) => {
  //         resolve(res);
  //       },
  //       (res:any) => {
  //         reject(res);
  //       }
  //     );

  //   });
  //   return promise;
  // }
}
