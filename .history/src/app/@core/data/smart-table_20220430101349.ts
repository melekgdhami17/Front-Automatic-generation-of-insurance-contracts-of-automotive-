import { HttpClient } from "@angular/common/http";

export abstract class SmartTableData {
    constructor(private http: HttpClient) { }
  getData(){
    return  this.http.get("http://127.0.0.1:5000/user")
  }
}
