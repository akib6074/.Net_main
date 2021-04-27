import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp:any;
  name:string | undefined;

  ngOnInit(): void {
    this.name = this.emp.name;
  }

  addEmployee() {
    var val = {name:this.name};
    this.service.addEmployee(val).subscribe(res=>{
    });
  }
  updateEmployee(id: any) {
    var val = {name:this.name};
    this.service.updateEmployee(id, val).subscribe(res=>{
    });
  }

}
