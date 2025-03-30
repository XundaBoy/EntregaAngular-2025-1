import { Component, inject } from '@angular/core';
import {Curso} from '../../../models/curso';
import { CursoService } from '../../../service/curso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.scss'
})
export class CursoListComponent {


    lista : Curso[] = [];
    cursoService = inject(CursoService );


    constructor(){
      this.findAll()
    }

    findAll(){

       this.cursoService.findAll().subscribe({
            next: (listaRetornada) =>{//DEU CERTO
              this.lista = listaRetornada;   
            },
            error: (erro) =>{//DEU ERRADO
              Swal.fire(erro.error, '', 'error');
            }
           });
    }

     deleteById(curso: Curso){
          
          if(confirm("Deseja deletar ?")){
            
            this.cursoService.deleteById(curso.id).subscribe({
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
