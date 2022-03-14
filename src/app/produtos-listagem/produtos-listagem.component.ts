import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ProdutoModel } from './produto.model';
import { ProdutoModelDTO } from './produtoDTO.model';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.component.html',
  styleUrls: ['./produtos-listagem.component.css']
})
export class ProdutosListagemComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();
  produtoDTO: ProdutoModelDTO = new ProdutoModelDTO();
  produtos: Array<any> = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.produtoService.listarProdutosAtivos().subscribe(dados => this.produtos = dados);
  }

  cadastrar(){
    this.produtoService.cadastrarProduto(this.produto).subscribe(produto => { 
      this.produto = new ProdutoModel();
      this.listar();
    } );
  }

  deletar(id:number){
    this.produtoService.deletarProduto(id).subscribe(id => {
      this.listar();
    });
  }

  desativar(id:number){
    this.produtoService.ativarDesativarProduto(id).subscribe(id => {
      this.listar();
    });
  }

  atualizarProduto(id : number){
    this.produtoDTO.id = id;
    this.produtoDTO.nome = this.produto.nome;
    this.produtoDTO.descricao = this.produto.descricao;
    this.produtoDTO.idCategoria = this.produto.categoria.id;
    this.produtoService.atualizarProduto(this.produtoDTO).subscribe(produto => { 
      this.produto = new ProdutoModel();
      this.listar();
    } );
  }

}
