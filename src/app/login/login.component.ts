import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Admin } from './admin';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(private fb:FormBuilder, private _loginService: LoginService, private router:Router){
    
  }


  ngOnInit(): void {
    this.formLogin =this.fb.group({
      psedo: ['', Validators.required],
      password:['', Validators.required]
    });
  }


  onSubmit(){
    // console.log(this.formLogin.value);
    this._loginService
    
  }




}
