import { Http } from '@angular/http';
import { Commitments } from './../table/Commitment';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-out-local',
  templateUrl: './out-local.component.html',
  styleUrls: ['./out-local.component.css']
})
export class OutLocalComponent implements OnInit {
  Commitments:Commitments[];
  totalCommit:any;
  LGross=0;
  LPF=0;
  LESI=0;
  LEPF=0;
  LEESI=0;
  LNET=0;
  LLIC=0;
  add = (a,b)=> a+b;
  sum = 0;
  date:string;
  loading:boolean=true;

  constructor(public dataservice:DataService,public route:Router) {
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

       this.LGross = this.LGross+commit.PLGross;
       this.LEPF=this.LEPF+commit.PLEPF;
       this.LEESI=this.LEESI+commit.PLEESI;
       this.LNET = this.LNET+commit.PLNET;
       this.LLIC=this.LLIC+commit.PLLIC;
       this.LPF=this.LPF+commit.PLEPF;
       this.LESI=this.LESI+commit.PLESI;



    };





    }
      )
      this.dataservice.getOutLocal().subscribe(res => this.date=res)
   }
   get(name)
   {
     this.route.navigate(['/localOn/' + name])
   }

  ngOnInit() {
  }

}
