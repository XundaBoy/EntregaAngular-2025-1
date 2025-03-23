import { Component } from '@angular/core';
import {Turma} from '../../../models/turma';
@Component({
  selector: 'app-turma-list',
  standalone: true,
  imports: [],
  templateUrl: './turma-list.component.html',
  styleUrl: './turma-list.component.scss'
})
export class TurmaListComponent {


    lista : Turma[] = [];

    constructor(){
      this.findAll()
    }

    findAll(){

      let turma1 = new Turma();
      turma1.id=1;
      turma1.nome="A";
      turma1.semestre="Segundo",
      turma1.ano=2025,
      turma1.turno="Manha";
      

      

      this.lista.push(turma1, );
    }

    delete(turma: Turma){
      let indice = this.lista.findIndex(x => {return x.id == turma.id});
      if(confirm("Deseja deletar ?")){
        this.lista.splice(indice, 1); 
      }
    }


}
