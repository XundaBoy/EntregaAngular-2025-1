import { Component, inject } from '@angular/core';
import {Aluno} from '../../../models/aluno';
import Swal from 'sweetalert2';
import { AlunoService } from '../../../service/aluno.service';
@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {


    lista : Aluno[] = [];

    alunoService = inject(AlunoService);

    constructor(){
      this.findAll()
    }

    findAll(){
     this.alunoService.findAll().subscribe({
      next: (listaRetornada) =>{//DEU CERTO
        this.lista = listaRetornada;   
      },
      error: (erro) =>{//DEU ERRADO
        Swal.fire(erro.error, '', 'error');
      }
     });
    }

    deleteById(aluno: Aluno){
      
      if(confirm("Deseja deletar ?")){
        
        this.alunoService.deleteById(aluno.id).subscribe({
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
