
import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Aluno } from '../../../models/aluno';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent {

  aluno: Aluno =  new Aluno();

  rotaAtivida = inject(ActivatedRoute);
  constructor(){

    let id = this.rotaAtivida.snapshot.params["id"];
    if(id){
      let aluno1 = new Aluno();
      aluno1.id = 10;
      aluno1.nome="Afonso";
      aluno1.cpf="321";
      aluno1.telefone="9990";
      aluno1.turma="D";
      this.aluno = aluno1;

    }
  }

  save(){
    if(this.aluno.id>0){
      alert("EStou realizando um update");
    }else{
      alert("Estou  salvando")
    }
  }
}
