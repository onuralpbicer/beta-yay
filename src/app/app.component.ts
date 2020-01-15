import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  logged = false; // change

  username:string = undefined;
  password:string = undefined;

  buying = false;
  producing = false;
  stock = true; // change
  ready = false;
  sell = false;
  log = false;

  sirket_ismi:string;
  yay_type:string;
  yay_size:number;
  plaka = false;
  quantity = 0;

  date_begin:any;
  date_end:any;
  log_list:any;

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

  ready_77001:number;
  ready_77002:number;
  ready_77003:number;
  ready_77004:number;
  ready_77005:number;
  ready_77006:number;
  ready_77007:number;
  ready_77008:number;
  ready_77009:number;
  ready_77502:number;
  ready_77503:number;
  ready_77504:number;
  ready_77505:number;
  ready_77506:number;
  ready_77507:number;
  ready_77508:number;


  constructor(
    private data:DataService,
  ) {}

  ngOnInit() {
    // this.mock_stock();
    this.get_stock();

  }

  checkValues() {
    if (this.yay_type === '775' && (this.yay_size === 1 || this.yay_size === 9 ) ) {
      return true;
    }
    return false;
  }
  
  goToReadyStock() {
    // API CAll get ready stock
    this.get_ready_stock();
    this.buying = false;
    this.stock = false;
    this.producing = false;
    this.ready = true;
    this.sell = false;
    this.log = false;
  }
  
  goToBuy() {
    this.clear_buy_values();
    this.log = false;
    this.buying = true;
    this.stock = false;
    this.ready = false;
    this.producing = false;
    this.sell = false;
  }
  
  goToProducing() {
    this.clear_produce_values();
    this.log = false;
    this.buying = false;
    this.stock = false;
    this.ready = false;
    this.producing = true;
    this.sell = false;
  }

  goToSell() {
    this.clear_sell_values();
    this.log = false;
    this.buying = false;
    this.stock = false;
    this.ready = false;
    this.producing = false;
    this.sell = true;
  }

  clear_sell_values() {
    this.sirket_ismi = undefined;
    this.yay_type = undefined;
    this.yay_size = undefined;
    this.quantity = 0;
    this.plaka = false;
  }

  goToStock() {
    // API call to get stock
    this.get_stock();
    this.log = false;
    this.buying = false;
    this.ready = false;
    this.stock = true;
    this.producing = false;
    this.sell = false;
  }

  goToLog() {
    this.clear_log_values();
    this.log = true;
    this.buying = false;
    this.ready = false;
    this.stock = false;
    this.producing = false;
    this.sell = false;

  }

  clear_log_values() {
    this.log_list = undefined;
    this.date_begin = undefined;
    this.date_end = undefined;
  }

  sell_items() {
    if (this.checkValues()) {
      alert("Lütfen Yay Tipini ve Boyunu Kontrol Ediniz");
      this.clear_sell_values();
      this.goToStock();
      this.goToSell();
    } else if (this.quantity !== 0) {

      this.data.buy_items(this.format_sale_data()).then((res) => {
        console.log(res);
          if (res.statusCode === 200) {
            alert("Satış Başarılı");
            this.clear_sell_values();
            this.goToStock();
            this.goToSell();
          } else if (res.statusCode === 400 || res.statusCode === 500) {
            alert("Satış Başarısız\n" + res.body);
            this.clear_sell_values();
            this.goToStock();
            this.goToSell();
          }
          

        },
        () => {
          alert("Satış Başarısız");

        }
      );
    } else {
      alert("Lütfen Adet Giriniz");
      this.clear_sell_values();
      this.goToStock();
      this.goToSell();
    }

  }


  produce_items() {
    // API call to produce items
    if (this.checkValues()) {
      alert("Lütfen Yay Tipini ve Boyunu Kontrol Ediniz");
      this.clear_produce_values();
      this.goToStock();
      this.goToProducing();
    } else if (this.quantity !== 0) {

      this.data.buy_items(this.format_production_data()).then((res) => {
        console.log(res);
          if (res.statusCode === 200) {
            alert("Üretim Başarılı");
            this.clear_produce_values();
            this.goToStock();
            this.goToProducing();
          } else if (res.statusCode === 400 || res.statusCode === 500) {
            alert("Üretim Başarısız\n" + res.body);
            this.clear_produce_values();
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
      this.clear_produce_values();
      this.goToStock();
      this.goToProducing();
    }
  }

  format_sale_data() {
    return {
      'sirket_ismi':this.sirket_ismi,
      'timestamp':Date.now(),
      'sell':true,
      'buy':false,
      'type': this.yay_type,
      'size': this.yay_size,
      'plaka': this.plaka,
      'quantity': this.quantity
    }
  }

  format_production_data() {
    return {
      'timestamp':Date.now(),
      'sell':false,
      'buy':false,
      'type': this.yay_type,
      'size': this.yay_size,
      'quantity': this.quantity
    }
  }

  clear_produce_values() {
    this.yay_type = undefined;
    this.yay_size = undefined;
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

  product_list(items) {
    console.log(items);
    var list = items['urun_list'];
    var info = new String();
    info = "Ürün Listesi:\n";
    for (let item of list) {
      info += item['name'] + ' ' + item['value'] + ' adet\n';
    }
    alert(info);
  }

  format_data() {
    return {
      'sirket_ismi':this.sirket_ismi,
      'timestamp':Date.now(),
      'sell':false,
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
    this.sirket_ismi = undefined;

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

  
  get_ready_stock() {
    this.data.get_all_ready_items().then(
      (list) => {
        // resolve
        [
          this.ready_77502,
          this.ready_77503,
          this.ready_77505,
          this.ready_77008,
          this.ready_77005,
          this.ready_77009,
          this.ready_77508,
          this.ready_77007,
          this.ready_77002,
          this.ready_77504,
          this.ready_77003,
          this.ready_77001,
          this.ready_77006,
          this.ready_77507,
          this.ready_77506,
          this.ready_77004
        ] = list;
      },
      () => {
        this.clear_stock();
      }

    );

    
    
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
  get_all_logs() {
    this.data.get_logs(undefined, undefined).then(
      (res) => {
        console.log(res);
        this.log_list = res;
      },
      (res) => {
        console.log(res);
        alert("Hata");
        console.log('error');
      }
    );
  }

  get_log_with_date() {
    
    this.data.get_logs(Date.parse(this.date_begin), Date.parse(this.date_end)).then(
      (res) => {
        console.log(res);
        this.log_list = res;
      },
      (res) => {
        console.log(res);
        alert('Hata');
        console.log('error');
      }
    );
  }

  login() {
    this.data.login(this.username,this.password).then(
      (res) => {
        console.log(res);
        console.log('success');
        this.logged = true;
      },
      (res) => {
        console.log(res);
        if (res.body == "User Not Found") {
          alert("Hatalı Kullanıcı Adı")
        } else if (res.body == "Wrong Password") {
          alert("Hatalı Şifre")
        } else {
          alert("Hata " + res.body);        
        }
        this.logged = false;
      }

    );

  }
  
}