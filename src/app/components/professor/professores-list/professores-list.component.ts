import { Component } from '@angular/core';
import { Professor } from '../../../models/professor';

@Component({
  selector: 'app-professores-list',
  standalone: true,
  imports: [],
  templateUrl: './professores-list.component.html',
  styleUrl: './professores-list.component.scss'
})
export class ProfessoresListComponent {


    lista : Professor[] = [];

    constructor(){
      this.findAll()
    }
    
    findAll(){

      let professor1 = new Professor();
      professor1.id=1;
      professor1.nome="Roberto";
      professor1.cpf="123";
      professor1.email="Roberto@gmail.com";
      professor1.especialidade="FRONT-END";

      let professor2 = new Professor();
      professor2.id=2;
      professor2.nome="Roberto";
      professor2.cpf="123";
      professor2.email="Roberto@gmail.com";
      professor2.especialidade="FRONT-END";


      let professor3= new Professor();
      professor3.id=3;
      professor3.nome="JavVVaaaaa";
      professor3.cpf="123";
      professor3.email="JAVAAAA@gmail.com";
      professor3.especialidade="FRONT-END";


      let professor4 = new Professor();
      professor4.id=4;
      professor4.nome="ARTHURRRRRRRRRRRRRRRRRRR";
      professor4.cpf="123";
      professor4.email="ARTHUR@gmail.com";
      professor4.especialidade="FRONT-END";

      this.lista.push(professor1,professor2,professor3,professor4);


      
    }

    delete(professor: Professor){
      let indice = this.lista.findIndex(x=>{return x.id == professor.id});
      if(confirm("Tem certeza?")){
        this.lista.splice(indice, 1);
      }

        
    }

}
