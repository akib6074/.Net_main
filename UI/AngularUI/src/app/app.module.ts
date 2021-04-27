import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { fromEventPattern } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditComponent } from './add-edit/add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule  
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
