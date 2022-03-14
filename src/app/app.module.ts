import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasListagemComponent } from './categorias-listagem/categorias-listagem.component';
import { CategoriaService } from './categoria.service';
import { ProdutosListagemComponent } from './produtos-listagem/produtos-listagem.component';
import { ProdutoService } from './produto.service';
import { TodosProdutosComponent } from './todos-produtos/todos-produtos.component';
import { TodosProdutosService } from './todos-produtos.service';

const rotas: Routes = [
  { path: '', component: CategoriasListagemComponent},
  { path: 'produto', component: ProdutosListagemComponent},
  { path: 'listaTodosProdutos', component: TodosProdutosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriasListagemComponent,
    ProdutosListagemComponent,
    TodosProdutosComponent
  ],
  exports: [ RouterModule ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rotas),
    HttpClientModule
  ],
  providers: [ CategoriaService, ProdutoService, TodosProdutosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
