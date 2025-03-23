
import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Turma } from '../../../models/turma';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turma-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './turma-form.component.html',
  styleUrl: './turma-form.component.scss'
})
export class TurmaFormComponent {

  turma: Turma =  new Turma();

  rotaAtivida = inject(ActivatedRoute);
  constructor(){

    let id = this.rotaAtivida.snapshot.params["id"];
    if(id){
      let turma1 = new Turma();
      turma1.id = 10;
      turma1.nome="B";
      turma1.ano=321;
      turma1.semestre="9990";
      turma1.turno="NOITE";
      this.turma = turma1;

    }
  }

  save(){
    if(this.turma.id>0){
      alert("EStou realizando um update");
    }else{
      alert("Estou  salvando")
    }
  }
}
