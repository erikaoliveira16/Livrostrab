import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
  import { AboutPage } from '../about/about';
  import 'rxjs/add/operator/map';
  
  @IonicPage()
  @Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
  })
  export class ContactPage {
    private url:string = "http://localhost:3000/contatos";
	
    public datos = {
      nome: '',
      descricao: '',
      link: ''
    };

    constructor(
      public toastCtrl: ToastController,
      public navCtrl: NavController, public http:Http, public navParams: NavParams,
    ) {}
    Contato(datos){
      let headers = new Headers();
      headers.append('Content-type','application/json');
    
      let options = new RequestOptions({ headers: headers });
    
      this.http.post(this.url, datos, options)
          .map(res => res.json())
          .subscribe(data => {
            const toast = this.toastCtrl.create({
            message: 'cadastrado com Sucesso!',
            showCloseButton: true,
            closeButtonText: 'Ok'
            });
            toast.present();
            this.navCtrl.push(AboutPage);
          });
    
        datos.nome = "";
        datos.descricao = "";
        datos.link = "";}   
}
