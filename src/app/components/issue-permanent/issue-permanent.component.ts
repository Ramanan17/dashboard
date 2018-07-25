import { permanent } from './../../permanent';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issue-permanent',
  templateUrl: './issue-permanent.component.html',
  styleUrls: ['./issue-permanent.component.css']
})
export class IssuePermanentComponent implements OnInit {

  date:string;
  name :string;
  perm:permanent[];
  loading:boolean=true;
  constructor(public dataservice:DataService,public route:ActivatedRoute) {
    this.route.params.subscribe(params => {this.name = params.Name;this.dataservice.getPermanentplace(this.name).subscribe(m => {this.perm=m;this.loading=false;})});
    this.dataservice.getOutEmp().subscribe(m  => this.date=m)

   }


  ngOnInit() {

  }

}
