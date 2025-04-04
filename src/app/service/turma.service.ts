import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Turma } from '../models/turma';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
http = inject(HttpClient);

API = 'http://localhost:8080/api/turma';

  constructor() { }


  findAll(): Observable<Turma[]>{
    return this.http.get<Turma[]>(this.API+'/findAll');
  }

  findById(id: number): Observable<Turma>{
    return this.http.get<Turma>(this.API+'/findById/'+id);
  }


  deleteById(id: number): Observable<string>{
    return this.http.delete<string>(this.API+'/deleteById/'+id, {responseType: 'text' as 'json'});
  }

  save(aluno: Turma): Observable<string> {
    return this.http.post<string>(this.API+'/save', aluno, {responseType: 'text' as 'json'});
  }

  update(aluno: Turma, id: number): Observable<string> {
    return this.http.put<string>(this.API+'/update/'+id, aluno, {responseType: 'text' as 'json'});
  }

 
}
