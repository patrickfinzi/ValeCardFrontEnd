import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutoModel } from './produtos-listagem/produto.model';
import { Observable } from 'rxjs';
import { ProdutoModelDTO } from './produtos-listagem/produtoDTO.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  cadastrarProduto(produto: ProdutoModel): Observable<any>{
    return this.http.post("http://localhost:8080/produto/cadastrarProduto",produto, {responseType:'text'});
  }

  listarProdutosAtivos(){
    return this.http.get<any[]>("http://localhost:8080/produto/listaAtivos");
  }

  deletarProduto(id : any): Observable<any>{
    return this.http.delete("http://localhost:8080/produto/excluirProduto/".concat(id),{responseType:'text'});
  }

  ativarDesativarProduto(id : any):Observable<any>{
    return this.http.put("http://localhost:8080/produto/ativarDesativarProduto/".concat(id), {responseType:'text'});
  }

  atualizarProduto(produtoDTO: ProdutoModelDTO): Observable<any>{
    return this.http.put("http://localhost:8080/produto/atualizarProduto",produtoDTO, {responseType:'text'});
  }
}
