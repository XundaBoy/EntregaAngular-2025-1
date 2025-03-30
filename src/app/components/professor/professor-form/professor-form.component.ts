import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Professor } from '../../../models/professor';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ProfessorService } from '../../../service/professor.service';

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
  professorService = inject(ProfessorService);


  constructor(){

  
    let id = this.rotaAtivida.snapshot.params["id"];
    if(id > 0){
     this.findById(id);

    }
  }

  findById(id : number){
  
      this.professorService.findById(id).subscribe({
        next: retorno =>{      
          this.professor = retorno;
        },
        error: erro =>{
          Swal.fire(erro.error, '', 'error');
        }
      })
  
    }
save(){
    if(this.professor.id>0){

      this.professorService.update(this.professor, this.professor.id).subscribe({
        next: mensagem =>{
          Swal.fire(mensagem, '', 'success');
           
        },
        error: erro =>{
          Swal.fire(erro.error, '', 'error');
        }

      })
      
    }else{
      this.professorService.save(this.professor).subscribe({
        next: mensagem =>{
       
        Swal.fire(mensagem, '', 'success');
                       
  
        },
        error: erro =>{  
          Swal.fire(erro.error, '', 'error');
        }

      })
    }
  }
  
}

