import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { CategoriaModel } from './categoria.model';

@Component({
  selector: 'app-categorias-listagem',
  templateUrl: './categorias-listagem.component.html',
  styleUrls: ['./categorias-listagem.component.css']
})
export class CategoriasListagemComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel();
  categorias: Array<any> = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.listar();
  }

  cadastrar(){
    this.categoriaService.cadastrarCategoria(this.categoria).subscribe(categoria => { 
      this.categoria = new CategoriaModel();
      this.listar();
    } );
  }

  listar(){
    this.categoriaService.listar().subscribe(dados => this.categorias = dados);
  }

  deletar(id:number){
    this.categoriaService.deletarCategoria(id).subscribe(id => {
      this.listar();
    });
  }

}
