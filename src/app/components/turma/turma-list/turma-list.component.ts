import { Component, inject } from '@angular/core';
import {Turma} from '../../../models/turma';
import Swal from 'sweetalert2';
import { TurmaService } from '../../../service/turma.service';
@Component({
  selector: 'app-turma-list',
  standalone: true,
  imports: [],
  templateUrl: './turma-list.component.html',
  styleUrl: './turma-list.component.scss'
  
})
export class TurmaListComponent {


    lista : Turma[] = [];
    turmaService = inject(TurmaService );

    constructor(){
      this.findAll()
    }

   findAll(){
   
          this.turmaService.findAll().subscribe({
               next: (listaRetornada) =>{//DEU CERTO
                 this.lista = listaRetornada;   
               },
               error: (erro) =>{//DEU ERRADO
                 Swal.fire(erro.error, '', 'error');
               }
              });
       }
   
        deleteById(turma: Turma){
             
             if(confirm("Deseja deletar ?")){
               
               this.turmaService.deleteById(turma.id).subscribe({
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
