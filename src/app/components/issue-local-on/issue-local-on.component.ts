import { DataService } from './../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { permanent } from '../../permanent';

@Component({
  selector: 'app-issue-local-on',
  templateUrl: './issue-local-on.component.html',
  styleUrls: ['./issue-local-on.component.css']
})
export class IssueLocalOnComponent implements OnInit {
  date:string;
  id :string;
  perm:permanent[];
  loading:boolean=true;
  constructor(private route:ActivatedRoute,public dataservice:DataService)

  {
    this.route.params.subscribe(params => {this.id = params.id;this.dataservice.getLocalIssue(this.id).subscribe(m => {this.perm=m;this.loading=false;})});
    this.dataservice.getOutLocal().subscribe(m  => this.date=m);

   }

  ngOnInit() {
  }

}
