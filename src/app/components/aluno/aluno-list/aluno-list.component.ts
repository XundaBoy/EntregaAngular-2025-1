import { Component } from '@angular/core';
import {Aluno} from '../../../models/aluno';
@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {


    lista : Aluno[] = [];

    constructor(){
      this.findAll()
    }

    findAll(){

      let aluno1 = new Aluno();
      aluno1.id=1;
      aluno1.nome="Arthur";
      aluno1.cpf="123",
      aluno1.telefone="000",
      aluno1.turma="A";
      

      let aluno2 = new Aluno();
      aluno2.id=2;
      aluno2.nome="Lucas";
      aluno2.cpf="456",
      aluno2.telefone="000",
      aluno2.turma="c";

      let aluno3 = new Aluno();
      aluno3.id=3;
      aluno3.nome="Nath";
      aluno3.cpf="789",
      aluno3.telefone="000",
      aluno3.turma="b";


      this.lista.push(aluno1, aluno2, aluno3);
    }

    delete(aluno: Aluno){
      let indice = this.lista.findIndex(x => {return x.id == aluno.id});
      if(confirm("Deseja deletar ?")){
        this.lista.splice(indice, 1); 
      }
    }


}
