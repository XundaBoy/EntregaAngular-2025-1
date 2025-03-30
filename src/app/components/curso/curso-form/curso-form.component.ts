
import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Curso } from '../../../models/curso';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../../../service/curso.service';
import Swal from 'sweetalert2';

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
    cursoService = inject(CursoService);

 
  constructor(){

    let id = this.rotaAtivida.snapshot.params["id"];
    if(id > 0){
      this.findById(id);
 
     }
    }
findById(id : number){
 
  this.cursoService.findById(id).subscribe({
      next: retorno =>{      
        this.curso = retorno;
      },
      error: erro =>{
        Swal.fire(erro.error, '', 'error');
      }
    })

  }

  save(){
    if(this.curso.id>0){

      this.cursoService.update(this.curso, this.curso.id).subscribe({
        next: mensagem =>{
       
        Swal.fire({
          title: mensagem,
          icon: "success",
          confirmButtonText: "Ok",

        });
  
        },
        error: erro =>{
          Swal.fire(erro.error, '', 'error');
        }

      })
      
    }else{
      this.cursoService.save(this.curso).subscribe({
        next: mensagem =>{
       
        Swal.fire({
          title: mensagem,
          icon: "success",
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




