import { Http } from '@angular/http';
import { Commitments } from './../table/Commitment';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-out-perm',
  templateUrl: './out-perm.component.html',
  styleUrls: ['./out-perm.component.css']
})
export class OutPermComponent implements OnInit {
  EGross=0;
  EPF=0;
  EESI=0;
  EEPF=0;
  EEESI=0;
  ENET=0;
  ELIC=0;
  Commitments:Commitments[];
  date:string;
  Math: any;
  loading:boolean=true;
  constructor(public dataservice:DataService,public route:Router) {
    this.Math=Math;
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

         this.EGross = this.EGross+(commit.PEGross);
         this.EEPF=this.EEPF+(commit.PEEPF);
         this.EEESI=this.EEESI+(commit.PEEESI);
         this.ENET = this.ENET+(commit.PENet);
         this.ELIC=this.ELIC+(commit.PELIC);
         this.EPF=this.EPF+(commit.PEEPF);
         this.EESI=this.EESI+(commit.PEESI);
        }})

        this.dataservice.getOutEmp().subscribe(res => this.date =res);

   }

  ngOnInit() {
  }
  get(name)
  {
    this.route.navigate(['/iperm/' + name])
  }


}
