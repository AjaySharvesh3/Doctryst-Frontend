import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:3000/doctryst/api/test/user';
  private doctorUrl = 'http://localhost:3000/doctryst/api/test/doctor';
  private adminUrl = 'http://localhost:3000/doctryst/api/test/admin';
  private staffUrl = 'http://localhost:3000/doctryst/api/test/staff';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  getDoctorBoard(): Observable<any> {
    return this.http.get(this.doctorUrl);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.adminUrl);
  }

  getStaffBoard(): Observable<any> {
    return this.http.get(this.staffUrl);
  }
}
