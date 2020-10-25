import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CatalogueServicesService } from '../catalogue-services.service';
import { product } from '../model/product.model';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
    public produits;
    private test:boolean;
    private currentProduct;
    private selectedFiles;
    progress: number;
    currentFileuploaded: any;
    private message;
  constructor(private cat:CatalogueServicesService, private route:ActivatedRoute,private router:Router,public auth:AuthentificationService) {
    
     }

  ngOnInit(): void {
    this.router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        let url=val.url;
        console.log(url);

    let p1=this.route.snapshot.params.p1;
    
    if(p1==1){
     
    this.getProducts("/produit/search/selectedproducts");
    this.message="les produits selectionnes";
    }
    else if(p1==2){
      let idcat=this.route.snapshot.params.p2;
      this.getProducts("/categories/"+idcat+"/products");
      this.message="les produits de la categorie"+idcat;
    }
    else if(p1==3){
      
      this.getProducts("/produit/search/promoproducts");
      this.message="les produits en promotion";
    }
    else if(p1==4){
      
      this.getProducts("/produit/search/availproducts");
      this.message="les produits disponibles";
    }
   
  }
});
    
    let p1=this.route.snapshot.params.p1;
    if(p1==1){
    this.getProducts("/produit/search/selectedproducts");
    }
  }

  public getProducts(url){
    this.cat.getRessources(url).subscribe(data=>{
      this.produits=data;},
      err=>{
        console.log(err);
      
    })
  }

  onEditPhoto(p){
    this.progress=0;
    this.currentProduct=p;
    this.test=true;
  }

  onSelectedFile(event){
     this.selectedFiles=event.target.files;
  }

  upload(){
   this.progress=0;   
   this.currentFileuploaded=this.selectedFiles.item(0);
   this.cat.uploadPhotoProduct(this.currentFileuploaded,this.currentProduct.id).subscribe(event=>{
     if(event.type===HttpEventType.UploadProgress){
       this.progress=Math.round(100*event.loaded/event.total);
     }
     else if(event instanceof HttpResponse){
       
     }
   },err=>{
     alert("probleme de chargement...")
   })

    this.selectedFiles=undefined
  }
  getTS(){
    return Date.now();
  }

  onProductDetail(p:product){
       let url=btoa(p._links.product.href);
       this.router.navigateByUrl("product-details/"+url);
  }
}
