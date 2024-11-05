import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent implements OnInit {

  contactForm!: FormGroup; 

  constructor(
    private fb: FormBuilder, 
    private _contactService: ContactService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    // Initialiser le formulaire
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

    // Récupérer l'ID du contact à partir des paramètres de route
    const routeParams = this.route.snapshot.params;
    console.log(routeParams['idCont']);

    // Charger les données du contact
    this._contactService.getContactById(routeParams['idCont']).subscribe((response: any) => {
      // console.log(response);
      // Mettre à jour les champs du formulaire avec les données récupérées
      if (response.data) {
        this.contactForm.patchValue({
          name: response.data.namCont,
          email: response.data.mailCont,
          message: response.data.messageCont
        });
      }
    });
  }

  onEdit() {
    // Préparer les données pour la mise à jour, en incluant l'ID
    const updatedContact = {
      idCont: this.route.snapshot.params['idCont'],
      ...this.contactForm.value
    };

    // Envoyer les données mises à jour au service
    this._contactService.editContact(updatedContact).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
