import { Observable } from 'rxjs/internal/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http)
  // tslint:disable-next-line:one-line
  {

  }
  getOutEmp()
  {
    return this.http.get("http://chemin.co.in/api/Site/OutLocal").pipe(map((response: any) => response.json()));
  }
  getOutLocal()
  {
    return this.http.get("http://chemin.co.in/api/Site/OutMaster").pipe(map((response: any) => response.json()));
  }

  getCommitments()
  {
    return this.http.get("http://chemin.co.in/api/Site/Commit").pipe(map((response: any) => response.json()));
  }
  getPermanentplace(place)
  {
    return this.http.get("http://chemin.co.in/api/Site/report/"+place).pipe(map((response: any) => response.json()));

  }
  getLocal(id)
  {
    return this.http.get("http://chemin.co.in/api/Site/local/"+id).pipe(map((response: any) => response.json()));


  }
  getIssue(place)
  {
    return this.http.get("http://chemin.co.in/api/Site/Out/"+place).pipe(map((response: any) => response.json()));

  }
  getLocalIssue(id)
  {
    return this.http.get("http://chemin.co.in/api/Site/ILOUT/"+id).pipe(map((response: any) => response.json()));

  }
  getTotalEmployee()
  {
    return this.http.get("http://chemin.co.in/api/Site/employeeDetails").pipe(map((response: any) => response.json()));
  }
  getLocalEmployee()
  {
    return this.http.get("http://chemin.co.in/api/Site/employeelocal").pipe(map((response: any) => response.json()));
  }

}
