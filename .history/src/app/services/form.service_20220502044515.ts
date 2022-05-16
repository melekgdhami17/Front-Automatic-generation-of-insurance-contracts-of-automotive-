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
  addDocuments(dName, cBy, cAt, nom) {
    const formData = new FormData();
    formData.append("titre", dName);
    formData.append("createdAt", cAt);
    formData.append("name", nom);
    formData.append("creator", cBy);
    // const body = { titre: dName, createdAt: cAt, name: nom, creator: cBy };
    console.log(dName);
    return this.http.post("http://127.0.0.1:8000/extractCin", formData);
  }
}
