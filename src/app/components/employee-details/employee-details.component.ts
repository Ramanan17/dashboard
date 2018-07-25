import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  permanent:any[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  loading:boolean=true;

  constructor(public dataservice:DataService) {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,



    };
    this.dataservice.getTotalEmployee().subscribe(res => {this.permanent=res;this.dtTrigger.next();this.loading=false})
   }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
