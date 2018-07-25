import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { permanent } from '../../permanent';

@Component({
  selector: 'app-issue-perm-on',
  templateUrl: './issue-perm-on.component.html',
  styleUrls: ['./issue-perm-on.component.css']
})
export class IssuePermOnComponent implements OnInit {
  date:string;
  name :string;
  perm:permanent[];
  loading:boolean=true;
  constructor(public dataservice:DataService,public route:ActivatedRoute) {
    this.route.params.subscribe(params => {this.name = params.Name;this.dataservice.getIssue(this.name).subscribe(m => {this.perm=m;this.loading=false;})});
    this.dataservice.getOutEmp().subscribe(m  => this.date=m)

  }

  ngOnInit() {
  }

}
