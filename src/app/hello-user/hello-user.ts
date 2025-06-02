import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-user',
  imports: [],
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
