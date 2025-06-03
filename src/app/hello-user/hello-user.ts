import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-hello-user',
  imports: [FormsModule],
  templateUrl: './hello-user.html',
  styleUrl: './hello-user.scss'
})
export class HelloUser {

  nom: string ='Utilisateur';
  compteurClics: number =0;

  incrementer(){
    this.compteurClics++;
  }

  resetCompteur(){
    this.compteurClics= 0;
  }

}
