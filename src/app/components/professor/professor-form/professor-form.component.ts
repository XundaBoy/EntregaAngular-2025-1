import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Professor } from '../../../models/professor';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.scss'
})
export class professorFormComponent {

  professor: Professor =  new Professor();

  rotaAtivida = inject(ActivatedRoute);
  constructor(){

    let id = this.rotaAtivida.snapshot.params["id"];
    if(id){
      let professor1 = new Professor();
      professor1.id = 1000;
      professor1.nome="NATHALIAS";
      professor1.cpf="321";
      professor1.email="email@gmail.com";
      professor1.especialidade="BACKEND";
      this.professor = professor1;

    }
  }

  save(){
    if(this.professor.id>0){
      alert("EStou realizando um update");
    }else{
      alert("Estou  salvando")
    }
  }
}

