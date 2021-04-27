import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: SharedService) { }

  EmployeeList:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditEmp:boolean=false;
  emp:any;
  id:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.emp={
      name:""
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmp=true;
  }

  editClick(item: any) {
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmp=true;
  }

  deleteClick(item: any) {
    if(confirm("Are you sure?")) {
      this.service.deleteEmployee(item.id).subscribe(data=>{
        this.refreshEmpList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditEmp=false;
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmployeeList().subscribe(data=>{
      this.EmployeeList = data;
    });
  }

}
