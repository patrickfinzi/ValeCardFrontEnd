import { Component, OnInit } from '@angular/core';
import { TodosProdutosService } from '../todos-produtos.service';

@Component({
  selector: 'app-todos-produtos',
  templateUrl: './todos-produtos.component.html',
  styleUrls: ['./todos-produtos.component.css']
})
export class TodosProdutosComponent implements OnInit {

  produtos: Array<any> = [];

  constructor(private todosProdutosService: TodosProdutosService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.todosProdutosService.listarTodosProdutos().subscribe(dados => this.produtos = dados);
  }

  deletar(id:number){
    this.todosProdutosService.deletarProduto(id).subscribe(id => {
      this.listar();
    });
  }

  ativar(id:number){
    this.todosProdutosService.ativarDesativarProduto(id).subscribe(id => {
      this.listar();
    });
  }

}
