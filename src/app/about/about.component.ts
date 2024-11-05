import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  contacts!: Contact[];
  _id:any;
  constructor(private _contactService: ContactService,
    private router:Router
  ){}

  ngOnInit() {

    this._contactService.getContact()
    .subscribe((data:Contact[]) =>{
    this.contacts=data;
    console.log(this.contacts);
    
    });
  }
  
    // delete(contacts: Contact):void{
    //   this._contactService.deleteContact(this.contacts.idCont)
    //   .subscribe(data =>{
    //     this.contacts = this.contacts.filter(u = > u ! == this.contacts);
    //   });
    // }
    
    edit(contact: Contact){
      this._id = contact.idCont;
      this.router.navigate(['projet/'+ this._id]);
    }
    
  }
