import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosProdutosService {

  constructor(private http: HttpClient) { }

  listarTodosProdutos(){
    return this.http.get<any[]>("http://localhost:8080/produto/listarTodosProdutos");
  }

  deletarProduto(id : any): Observable<any>{
    return this.http.delete("http://localhost:8080/produto/excluirProduto/".concat(id),{responseType:'text'});
  }

  ativarDesativarProduto(id : any):Observable<any>{
    return this.http.put("http://localhost:8080/produto/ativarDesativarProduto/".concat(id),{responseType:'text' as 'json'});
  }
}
