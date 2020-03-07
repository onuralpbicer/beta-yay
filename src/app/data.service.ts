import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api_url = 'https://9uj5kwwke4.execute-api.ap-southeast-2.amazonaws.com/prod/';

  constructor(private http:HttpClient) { }

  get_all_ready_items():Promise <any> {
    var promise = new Promise<any> ((resolve, reject) => {
      //console.log("Calling api");
      this.http.get(this.api_url + 'ready').toPromise().then(
        (res:any) => {
          //console.log("Success");
          // console.log(res['body']['Items']);
          resolve(this.fix_output(res['body']['Items']));
        },
        (res:any) => {
          //console.log("Error");
          //console.log(res);
          reject(res);
        }
      );
    });
    return promise;

  }
  get_all_kapak():Promise <any> {
    var promise = new Promise<any> ((resolve, reject) => {
      //console.log("Calling api");
      this.http.get(this.api_url + 'kapak-stock').toPromise().then(
        (res:any) => {
          //console.log("Success");
          //console.log(res['body']);
          resolve(this.fix_output(res['body']['Items']));
        },
        (res:any) => {
          //console.log("Error");
          //console.log(res);
          reject(res);
        }
      );
    });
    return promise;

  }

  get_all_items():Promise <any> {
    var promise = new Promise<any> ((resolve, reject) => {
      //console.log("Calling api");
      this.http.get(this.api_url + 'list').toPromise().then(
        (res:any) => {
          //console.log("Success");
          // //console.log(res['body']);
          resolve(this.fix_output(res['body']['Items']));
        },
        (res:any) => {
          //console.log("Error");
          //console.log(res);
          reject(res);
        }
      );
    });
    return promise;

  }
  test_items():Promise <any> {
    var promise = new Promise<any> ((resolve, reject) => {
      //console.log("Calling api");
      this.http.get(this.api_url + 'log').toPromise().then(
        (res:any) => {
          //console.log("Success");
          // //console.log(res['body']['Items']);
          resolve(res);
        },
        (res:any) => {
          //console.log("Error");
          //console.log(res);
          reject(res);
        }
      );
    });
    return promise;

  }

  sell_items(items):Promise<any> {
    var promise = new Promise<any> ((resolve, reject) => {
      //console.log("Calling api");
      this.http.post(this.api_url + 'sell',items).toPromise().then(
        (res:any) => {
          //console.log("Success");
          resolve(res);
        },
        (res:any) => {
          //console.log("Error");
          //console.log(res);
          reject(res);
        }
      );
    });
    return promise;
  }

  make_kapak(items):Promise<any> {
    var promise = new Promise<any> ((resolve, reject) => {
      //console.log("Calling api");
      this.http.post(this.api_url + 'add-kapak',items).toPromise().then(
        (res:any) => {
          //console.log("Success");
          resolve(res);
        },
        (res:any) => {
          //console.log("Error");
          //console.log(res);
          reject(res);
        }
      );
    });
    return promise;
  }



  buy_items(items):Promise<any> {
    var promise = new Promise<any> ((resolve, reject) => {
      //console.log("Calling api");
      this.http.post(this.api_url + 'buy',items).toPromise().then(
        (res:any) => {
          //console.log("Success");
          resolve(res);
        },
        (res:any) => {
          //console.log("Error");
          //console.log(res);
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
  get_logs(alim:boolean, satis:boolean, uretim:boolean,yay_log:boolean,date_begin:any,date_end:any,
      log_77001:boolean,
      log_77002:boolean,
      log_77003:boolean,
      log_77004:boolean,
      log_77005:boolean,
      log_77006:boolean,
      log_77007:boolean,
      log_77008:boolean,
      log_77009:boolean,
      log_77502:boolean,
      log_77503:boolean,
      log_77504:boolean,
      log_77505:boolean,
      log_77506:boolean,
      log_77507:boolean,
      log_77508:boolean):Promise<any> {
    var promise = new Promise<any> ((resolve, reject) => {
      //console.log("Calling api");
      this.http.get(this.api_url + 'log?date_begin=' + date_begin + '&date_end=' + date_end + '&alim=' + alim + '&satis=' + satis + '&uretim=' + uretim + '&yay_log=' + yay_log + 
        '&77001=' + log_77001 +
        '&77002=' + log_77002 +
        '&77003=' + log_77003 +
        '&77004=' + log_77004 +
        '&77005=' + log_77005 +
        '&77006=' + log_77006 +
        '&77007=' + log_77007 +
        '&77008=' + log_77008 +
        '&77009=' + log_77009 +
        '&77502=' + log_77502 +
        '&77503=' + log_77503 +
        '&77504=' + log_77504 +
        '&77505=' + log_77505 +
        '&77506=' + log_77506 +
        '&77507=' + log_77507 +
        '&77508=' + log_77508).toPromise().then(
        (res:any) => {
          //console.log("Success");
          console.log(res);
          for (let item of res.body) {
            item['date'] = new Date(item['date']).toLocaleDateString();
          }
          resolve(res.body);
        },
        (res:any) => {
          //console.log("Error");
          //console.log(res);
          reject(res);
        }
      );
    });
    return promise;
  }

  login(username:string, password:string):Promise<any> {
    var promise = new Promise<any> ((resolve, reject) => {
      //console.log("Calling api");
      this.http.get(this.api_url + 'login?username=' + username + '&password=' + password).toPromise().then(
        (res:any) => {
          if (res.statusCode != 200) {
            //console.log("Error");
            reject(res);
          }
          else {
            //console.log("Success");
            resolve(res);
          }
        },
        (res:any) => {
          //console.log("Error");
          reject(res);
        }
      );
    });
    return promise;
  }

  signup(user:string, pass:string):Promise<any> {
    var promise = new Promise<any> ((resolve, reject) => {
      //console.log("Calling api");
      this.http.post(this.api_url + 'add',{"username": user, "password": pass}).toPromise().then(
        (res:any) => {
          //console.log("Success");
          resolve(res);
        },
        (res:any) => {
          //console.log("Error");
          //console.log(res);
          reject(res);
        }
      );
    });
    return promise;
  }

}

