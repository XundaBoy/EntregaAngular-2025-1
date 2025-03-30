
import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Aluno } from '../../../models/aluno';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../../service/aluno.service';


@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent {

  aluno: Aluno =  new Aluno();

  rotaAtivida = inject(ActivatedRoute);
  alunoService = inject(AlunoService);


  constructor(){

    let id = this.rotaAtivida.snapshot.params["id"];
    if(id > 0){
     this.findById(id);

    }
  }

  findById(id : number){

    this.alunoService.findById(id).subscribe({
      next: retorno =>{      
        this.aluno = retorno;
      },
      error: erro =>{
        Swal.fire(erro.error, '', 'error');
      }
    })

  }

  save(){
    if(this.aluno.id>0){

      this.alunoService.update(this.aluno, this.aluno.id).subscribe({
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
      this.alunoService.save(this.aluno).subscribe({
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
