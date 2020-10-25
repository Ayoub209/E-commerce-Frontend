import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueServicesService } from '../catalogue-services.service';
import { product } from '../model/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private cat:CatalogueServicesService) { }
   public currentpro:product;
  ngOnInit(): void {
    let url=atob(this.route.snapshot.params.url);
    this.cat.getProduct(url).subscribe(data=>{
      this.currentpro=data;
    })
  }

}
