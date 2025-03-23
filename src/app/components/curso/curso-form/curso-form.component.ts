
import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Curso } from '../../../models/curso';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.scss'
})
export class CursoFormComponent {

  curso: Curso =  new Curso();

  rotaAtivida = inject(ActivatedRoute);
  constructor(){

    let id = this.rotaAtivida.snapshot.params["id"];
    if(id){
      let curso = new Curso();
      curso.id = 10;
      curso.nome="MEDICINA";
     

    }
  }

  save(){
    if(this.curso.id>0){
      alert("EStou realizando um update");
    }else{
      alert("Estou  salvando")
    }
  }
}
