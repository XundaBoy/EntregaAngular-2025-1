
import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Turma } from '../../../models/turma';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TurmaService } from '../../../service/turma.service';
import Swal from 'sweetalert2';

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
   turmaService = inject(TurmaService);
  constructor(){
    let id = this.rotaAtivida.snapshot.params["id"];
    if(id > 0){
     this.findById(id);

    }
  }
findById(id : number){

    this.turmaService.findById(id).subscribe({
      next: retorno =>{      
        this.turma = retorno;
      },
      error: erro =>{
        Swal.fire(erro.error, '', 'error');
      }
    })

  }

  save(){
    if(this.turma.id>0){

      this.turmaService.update(this.turma, this.turma.id).subscribe({
        next: mensagem =>{
       
        Swal.fire({
          title: mensagem,
          icon: "error",
          confirmButtonText: "Ok",

        });
  
        },
        error: erro =>{
          Swal.fire(erro.error, '', 'error');
        }

      })
      
    }else{
      this.turmaService.save(this.turma).subscribe({
        next: mensagem =>{
       
        Swal.fire({
          title: mensagem,
          icon: "error",
          confirmButtonText: "Ok",

        });
  
        },
        error: erro =>{  
          Swal.fire(erro.error, '', 'error');
        }

      })
    }
  }
 
}
