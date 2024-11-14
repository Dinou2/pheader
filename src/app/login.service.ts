import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './login/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getAdmin(){
    return this.http.get<Admin[]>('http://localhost/pheader/login.php')
  }
}
