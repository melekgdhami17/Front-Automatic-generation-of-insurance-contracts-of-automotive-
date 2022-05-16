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
    return this.http.get(`${BASE_PATH}/labels`, {});
  }
  getData() {
    return this.http.get(`${BASE_PATH}/data`, {});
  }
  addPredict(predict) {
    return this.http.post<any>(`${BASE_PATH}/predict`, predict);
  }
}

