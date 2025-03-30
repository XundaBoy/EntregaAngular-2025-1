import { Component, inject } from '@angular/core';
import { Professor } from '../../../models/professor';
import { ProfessorService } from '../../../service/professor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-professores-list',
  standalone: true,
  imports: [],
  templateUrl: './professores-list.component.html',
  styleUrl: './professores-list.component.scss'
})
export class ProfessoresListComponent {


    lista : Professor[] = [];

   professorService = inject(ProfessorService);
   
       constructor(){
         this.findAll()
       }
    
    findAll(){

     this.professorService.findAll().subscribe({
           next: (listaRetornada) =>{//DEU CERTO
             this.lista = listaRetornada;   
           },
           error: (erro) =>{//DEU ERRADO
             Swal.fire(erro.error, '', 'error');
           }
          });
    }

     deleteById(professor: Professor){
          
          if(confirm("Deseja deletar ?")){
            
            this.professorService.deleteById(professor.id).subscribe({
              next: (mensagem) =>{//DEU CERTO
                Swal.fire(mensagem, '', 'success');
                this.findAll();
              },
              error: (erro) =>{//DEU ERRADO
                Swal.fire(erro.error, '', 'error');
              }
             });
    
          }
        }

}
