import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from './contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  constructor(private fb: FormBuilder, 
    private _contactService:ContactService,
    private router:Router) { 
  }
    contactForm!: FormGroup; 
    ngOnInit(): void {
      this.contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(12)]],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required]
      });
    }
   
    onSubmit(){
      // console.log(this.contactForm.value);
      this._contactService.creatContact(this.contactForm.value)
      .subscribe(data =>{
        this.router.navigate(['']);
      });
    }
  }


