import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
const BASE_PATH = environment.basePath;
@Injectable({
  providedIn: 'root',
})
export class PredictService {
  constructor(protected http: HttpClient) { }
  getlabels() {
    return this.http.get("http://127.0.0.1:80/labels", {});
  }
  getData() {
    return this.http.get("http://127.0.0.1:80/data", {});
  }
  addPredict(predict) {
    return this.http.post<any>("http://127.0.0.1:80/predict", predict);
  }
}

