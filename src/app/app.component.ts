import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueServicesService } from './catalogue-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public categories;
  private currentcat;
  private message;
  constructor(private cat:CatalogueServicesService,private route:Router){}

  ngOnInit():void{
      this.getCategories();
  }
  private getCategories(){
    this.cat.getRessources("/categories").subscribe(data=>{
      this.categories=data;
    },err=>{
      console.log(err);
    })

  }
    getProductsBycat(c){
      this.currentcat=c;
      this.route.navigateByUrl('products/2/'+c.id);
      
  }
  onSelectedProducts(){
    this.currentcat=undefined;
    this.route.navigateByUrl("products/1/0");
  
  }
  onpromo(){
    this.currentcat=undefined;
    this.route.navigateByUrl("products/3/0");
    
  }
  onavailable(){
    this.currentcat=undefined;
    this.route.navigateByUrl("products/4/0");
    
  }
  onlogout(){
    this.route.navigateByUrl("login");
    this.currentcat=undefined;
  }
  
}
