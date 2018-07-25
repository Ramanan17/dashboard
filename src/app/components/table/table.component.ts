import { DecimalPipe, CurrencyPipe } from '@angular/common';
import { Http } from '@angular/http';
import { Commitments } from './Commitment';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  date:string;
  Commitments:Commitments[];
  rowdata:any;
  loading:boolean = true;
  constructor(public dataservice:DataService,public http:Http,public route:Router) {
   this.dataservice.getCommitments().subscribe(m => {this.Commitments=m;
    this.loading=false;
    for(let commit of this.Commitments)
    {
      if(commit.LGross==null)
      {
        commit.LGross=0;
      }
      else{
       // this.LGross= this.LGross+Math.round(commit.LGross)
      }

       this.EGross = this.EGross+commit.EGross;
       this.EEPF=this.EEPF+commit.EEPF;
       this.EEESI=this.EEESI+commit.EEESI;
       this.ENET = this.ENET+commit.ENet;
       this.ELIC=this.ELIC+commit.ELIC;
       this.EPF=this.EPF+commit.EEPF;
       this.EESI=this.EESI+commit.EESI;
      }});
      this.dataservice.getOutEmp().subscribe(res => this.date =res);
   }
   EGross=0;
EPF=0;
EESI=0;
EEPF=0;
EEESI=0;
ENET=0;
ELIC=0;






  ngOnInit() {
   // this.rowdata = this.http.get('http://localhost:50607/api/Site/Commit');
  }
  get(name)
  {
    this.route.navigate(['/permanent/' + name])
  }


}
