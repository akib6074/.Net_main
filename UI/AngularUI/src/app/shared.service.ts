import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    readonly APIUrl = "https://localhost:44341/api";

    constructor(private http: HttpClient) {}

    getEmployeeList(): Observable<any[]>{
        return this.http.get<any>(this.APIUrl+'/employees');
    }

    addEmployee(val:any){
        return this.http.post(this.APIUrl+'/employees', val);
    }

    updateEmployee(id:any, val:any){
        return this.http.patch(this.APIUrl+'/employees/'+ id, val);
    }

    deleteEmployee(id:any){
        return this.http.delete(this.APIUrl+'/employees/'+ id);
    }
}