import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueServicesService {

   public host:string="http://localhost:8080"
  constructor(private http:HttpClient) { }

  public getRessources(url){
        return this.http.get(this.host+url);
  }
  public getProduct(url):Observable<product>{
    return this.http.get<product>(this.host+url);
}

  uploadPhotoProduct(file:File,idpro):Observable<HttpEvent<{}>>{
    let formdata:FormData=new FormData();
    formdata.append('file',file);
    const req=new HttpRequest('POST',this.host+'/uploadPhotoPr/'+idpro,formdata,{
      reportProgress:true,
      responseType:'text'
    });
     return this.http.request(req);
  }
}
