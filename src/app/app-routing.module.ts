import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetComponent } from './projet/projet.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailProjetComponent } from './detail-projet/detail-projet.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'projet', component: ProjetComponent},
  { path: 'projet/:id', component: DetailProjetComponent },
  {path:'**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
