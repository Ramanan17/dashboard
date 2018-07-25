import { DataService } from './../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { permanent } from '../../permanent';

@Component({
  selector: 'app-issue-local',
  templateUrl: './issue-local.component.html',
  styleUrls: ['./issue-local.component.css']
})
export class IssueLocalComponent implements OnInit {

  date:string;
  id :string;
  perm:permanent[];
  loading:boolean=true;
  constructor(private route:ActivatedRoute,public dataservice:DataService) {
    this.route.params.subscribe(params => {this.id = params.id;  ;this.dataservice.getLocal(this.id).subscribe(m => {this.perm=m; this.loading=false;console.log(this.loading)})});

    this.dataservice.getOutLocal().subscribe(m  => this.date=m);
   }

  ngOnInit() {
  }

}
