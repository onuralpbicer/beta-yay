import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api_url = 'https://9uj5kwwke4.execute-api.ap-southeast-2.amazonaws.com/dev/';

  constructor(private http:HttpClient) { }

  
  get_all_items():Promise <any> {
    var promise = new Promise<any> ((resolve, reject) => {
      console.log("Calling api");
      this.http.get(this.api_url + 'list').toPromise().then(
        (res:any) => {
          console.log("Success");
          // console.log(res['body']['Items']);
          resolve(this.fix_output(res['body']['Items']));
        },
        (res:any) => {
          console.log("Error");
          console.log(res);
          reject(res);
        }
      );
    });
    return promise;

  }

  buy_items(items):Promise<any> {
    var promise = new Promise<any> ((resolve, reject) => {
      console.log("Calling api");
      this.http.post(this.api_url + 'buy',items).toPromise().then(
        (res:any) => {
          console.log("Success");
          resolve(res);
        },
        (res:any) => {
          console.log("Error");
          console.log(res);
          reject(res);
        }
      );
    });
    return promise;
  }
  
  fix_output(items:any):Array<number> {
    
    var list:Array<number> = []

    for (let item of items) {
      list.push(item['quantity']);
    }

    return list;

  }

}
