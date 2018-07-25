import { Http } from '@angular/http';
import { Commitments } from './../table/Commitment';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
script:number;
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

     this.LGross = this.LGross+commit.LGross;
     this.LEPF=this.LEPF+commit.LEPF;
     this.LEESI=this.LEESI+commit.LEESI;
     this.LNET = this.LNET+commit.LNET;
     this.LLIC=this.LLIC+commit.LLIC;
     this.LPF=this.LPF+commit.LEPF;
     this.LESI=this.LESI+commit.LESI;



  };





  }
    )
    this.dataservice.getOutLocal().subscribe(res => this.date=res)
      }
      get(name)
      {
        this.route.navigate(['/local/' + name])
      }

  ngOnInit() {
  }

}
