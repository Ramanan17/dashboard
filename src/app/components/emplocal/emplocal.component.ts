import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-emplocal',
  templateUrl: './emplocal.component.html',
  styleUrls: ['./emplocal.component.css']
})
export class EmplocalComponent implements OnInit {

  permanent:any[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  loading:boolean=true;

  constructor(public dataservice:DataService) {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,


    };
    this.dataservice.getLocalEmployee().subscribe(res => {this.permanent=res;this.dtTrigger.next();this.loading=false})

   }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
