import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  buying = false;
  producing = false;
  stock = true;

  rest:any;

  yay_type:string;
  yay_size:number;
  plaka = false;
  quantity = 0;

  buy_77001 = 0;
  buy_77002 = 0;
  buy_77003 = 0;
  buy_77004 = 0;
  buy_77005 = 0;
  buy_77006 = 0;
  buy_77007 = 0;
  buy_77008 = 0;
  buy_77009 = 0;
  buy_770kapak = 0;
  buy_770percin = 0;
  buy_770plaka = 0;

  buy_77502 = 0;
  buy_77503 = 0;
  buy_77504 = 0;
  buy_77505 = 0;
  buy_77506 = 0;
  buy_77507 = 0;
  buy_77508 = 0;
  buy_775kapak = 0;
  buy_775percin = 0;
  buy_775plaka = 0;

  stock_77001:number;
  stock_77002:number;
  stock_77003:number;
  stock_77004:number;
  stock_77005:number;
  stock_77006:number;
  stock_77007:number;
  stock_77008:number;
  stock_77009:number;
  stock_770kapak:number;
  stock_770percin:number;
  stock_770plaka:number;

  stock_77502:number;
  stock_77503:number;
  stock_77504:number;
  stock_77505:number;
  stock_77506:number;
  stock_77507:number;
  stock_77508:number;
  stock_775kapak:number;
  stock_775percin:number;
  stock_775plaka:number;


  constructor(
    private data:DataService,
  ) {}

  ngOnInit() {
    // this.mock_stock();
    this.get_stock();

  }
  
  
  goToBuy() {
    this.clear_buy_values();
    this.buying = true;
    this.stock = false;
    this.producing = false;
  }
  
  goToProducing() {
    this.clear_sell_values();
    this.buying = false;
    this.stock = false;
    this.producing = true;
  }

  goToStock() {
    // API call to get stock
    // this.mock_stock(); 
    this.get_stock();

    this.buying = false;
    this.stock = true;
    this.producing = false;
  }

  sell_items() {
    // API call to sell items
    if (this.quantity !== 0) {

      this.data.buy_items(this.format_production_data()).then((res) => {
          if (res.statusCode === 200) {
            alert("Üretim Başarılı");
            this.clear_sell_values();
            this.goToStock();
            this.goToProducing();
          } else if (res.statusCode === 400) {
            alert("Üretim Başarısız\n" + res.body);
            this.clear_sell_values();
            this.goToStock();
            this.goToProducing();
          }
          

        },
        () => {
          alert("Üretim Başarısız");

        }
      );
    } else {
      alert("Lütfen Adet Giriniz");
      this.clear_sell_values();
      this.goToStock();
      this.goToProducing();
    }
  }

  format_production_data() {
    return {
      'buy':false,
      'type': this.yay_type,
      'size': this.yay_size,
      'plaka': this.plaka,
      'quantity': this.quantity
    }
  }

  clear_sell_values() {
    this.yay_type = undefined;
    this.yay_size = undefined;
    this.plaka = false;
    this.quantity = 0;

  }

  add_items() {
    
    var items = this.format_data();
    this.data.buy_items(items).then(
      (res) => {
        alert("Alım Başarılı");
        this.clear_buy_values();
        this.goToStock(); // Activate this for production

      },
      () => {
        alert("Alım Başarısız");

      }
    );
  }

  format_data() {
    return {
      'buy':true,
      'items':[
        {
          'name':'770-01',
          'value':this.buy_77001
        },
        {
          'name':'770-02',
          'value':this.buy_77002
        },
        {
          'name':'770-03',
          'value':this.buy_77003
        },
        {
          'name':'770-04',
          'value':this.buy_77004
        },
        {
          'name':'770-05',
          'value':this.buy_77005
        },
        {
          'name':'770-06',
          'value':this.buy_77006
        },
        {
          'name':'770-07',
          'value':this.buy_77007
        },
        {
          'name':'770-08',
          'value':this.buy_77008
        },
        {
          'name':'770-09',
          'value':this.buy_77009
        },
        {
          'name':'770-percin',
          'value':this.buy_770percin
        },
        {
          'name':'770-kapak',
          'value':this.buy_770kapak
        },
        {
          'name':'770-plaka',
          'value':this.buy_770plaka
        },
        {
          'name':'775-02',
          'value':this.buy_77502
        },
        {
          'name':'775-03',
          'value':this.buy_77503
        },
        {
          'name':'775-04',
          'value':this.buy_77504
        },
        {
          'name':'775-05',
          'value':this.buy_77505
        },
        {
          'name':'775-06',
          'value':this.buy_77506
        },
        {
          'name':'775-07',
          'value':this.buy_77507
        },
        {
          'name':'775-08',
          'value':this.buy_77508
        },
        {
          'name':'775-percin',
          'value':this.buy_775percin
        },
        {
          'name':'775-kapak',
          'value':this.buy_775kapak
        },
        {
          'name':'775-plaka',
          'value':this.buy_775plaka
        }
      ]
    }
  }

 

  clear_buy_values() {
    this.buy_77001 = 0;
    this.buy_77002 = 0;
    this.buy_77003 = 0;
    this.buy_77004 = 0;
    this.buy_77005 = 0;
    this.buy_77006 = 0;
    this.buy_77007 = 0;
    this.buy_77008 = 0;
    this.buy_77009 = 0;
    this.buy_770kapak = 0;
    this.buy_770percin = 0;
    this.buy_770plaka = 0;

    this.buy_77502 = 0;
    this.buy_77503 = 0;
    this.buy_77504 = 0;
    this.buy_77505 = 0;
    this.buy_77506 = 0;
    this.buy_77507 = 0;
    this.buy_77508 = 0;
    this.buy_775kapak = 0;
    this.buy_775percin = 0;
    this.buy_775plaka = 0;

  }

  clear_stock() {
    this.stock_77001 = 0;
    this.stock_77002 = 0;
    this.stock_77003 = 0;
    this.stock_77004 = 0;
    this.stock_77005 = 0;
    this.stock_77006 = 0;
    this.stock_77007 = 0;
    this.stock_77008 = 0;
    this.stock_77009 = 0;
    this.stock_770kapak = 0;
    this.stock_770percin = 0;
    this.stock_770plaka = 0;

    this.stock_77502 = 0;
    this.stock_77503 = 0;
    this.stock_77504 = 0;
    this.stock_77505 = 0;
    this.stock_77506 = 0;
    this.stock_77507 = 0;
    this.stock_77508 = 0;
    this.stock_775kapak = 0;
    this.stock_775percin = 0;
    this.stock_775plaka = 0;

  }

  mock_stock() {
    this.stock_77001 = 113;
    this.stock_77002 = 2;
    this.stock_77003 = 3;
    this.stock_77004 = 4;
    this.stock_77005 = 5;
    this.stock_77006 = 6;
    this.stock_77007 = 7;
    this.stock_77008 = 8;
    this.stock_77009 = 9;
    this.stock_770kapak = 10;
    this.stock_770percin = 11;
    this.stock_770plaka = 12;

    this.stock_77502 = 213;
    this.stock_77503 = 14;
    this.stock_77504 = 15;
    this.stock_77505 = 16;
    this.stock_77506 = 17;
    this.stock_77507 = 18;
    this.stock_77508 = 19;
    this.stock_775kapak = 20;
    this.stock_775percin = 22;
    this.stock_775plaka = 23;
  }
  get_stock(){
    this.data.get_all_items().then(
      (list) => {
        // resolve
        [
          this.stock_770plaka,
          this.stock_77502,
          this.stock_77503,
          this.stock_770kapak,
          this.stock_77505,
          this.stock_775percin,
          this.stock_77008,
          this.stock_77005,
          this.stock_77009,
          this.stock_77508,
          this.stock_77007,
          this.stock_77002,
          this.stock_77504,
          this.stock_775kapak,
          this.stock_77003,
          this.stock_77001,
          this.stock_77006,
          this.stock_77507,
          this.stock_770percin,
          this.stock_775plaka,
          this.stock_77506,
          this.stock_77004
        ] = list;
      },
      () => {
        this.clear_stock();
      }

    );

  }
  
}


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