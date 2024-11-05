import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact/contact'; 

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContact() {
    return this.http.get<Contact[]>('http://localhost/contact/init.php');
  }

  // deletContact(idCont:number){
  //   return this.http.delete<Contact[]>('http://localhost/contact/init.php?idCont=');
  // }

  creatContact(contacte: Contact) {
    return this.http.post('http://localhost/contact/creat.php', contacte);
  }

  getContactById(id:number){
    return this.http.get<Contact[]>('http://localhost/contact/getContactById.php?idCont=' + id);
    
  }

  editContact(contacte: Contact){
    return this.http.put('http://localhost/contact/Edite.php?idCont=' + '?id=' + contacte.idCont, contacte);
  }
}
