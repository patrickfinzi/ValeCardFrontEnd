import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from './categorias-listagem/categoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriasUrl = 'http://localhost:8080/categoria/listarTodasCategorias';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.categoriasUrl}`);
  }

  cadastrarCategoria(categoria : CategoriaModel): Observable<any>{
    return this.http.post("http://localhost:8080/categoria/criarCategoria",categoria, {responseType:'text'});
  }

  deletarCategoria(id : any): Observable<any>{
    return this.http.delete("http://localhost:8080/categoria/deletarCategoria/".concat(id),{responseType:'text'});
  }
}
