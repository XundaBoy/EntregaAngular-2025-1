import { Component } from '@angular/core';
import {Curso} from '../../../models/curso';
@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.scss'
})
export class CursoListComponent {


    lista : Curso[] = [];

    constructor(){
      this.findAll()
    }

    findAll(){

      let curso1 = new Curso();
     curso1.id=1;
     curso1.nome="Arquitetura";
      

     let curso2 = new Curso();
     curso2.id=2;
     curso2.nome="Engenharia";

      


      this.lista.push(curso1, curso2);
    }

    delete(curso: Curso){
      let indice = this.lista.findIndex(x => {return x.id == curso.id});
      if(confirm("Deseja deletar ?")){
        this.lista.splice(indice, 1); 
      }
    }


}
