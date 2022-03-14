import { CategoriaModel } from "../categorias-listagem/categoria.model";

export class ProdutoModel{
    nome: string | undefined;
    descricao: string | undefined;
    status: string | undefined;
    categoria: CategoriaModel = new CategoriaModel();
}