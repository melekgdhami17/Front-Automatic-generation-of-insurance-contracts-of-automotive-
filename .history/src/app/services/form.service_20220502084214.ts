import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }
  getInfos(){
    return  this.http.get("http://127.0.0.1:5000/user")
  }
  addDocuments(fichier) {
    const body = { file: fichier };
    const res = this.http.post("http://127.0.0.1:5000/extractCin", body).subscribe(res => {
      console.log(res);
    });
    console.log(res);
    return res ;
  }
}
