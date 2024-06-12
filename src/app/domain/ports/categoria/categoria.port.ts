import { ICategoriaRequest } from "./categoria.dto";

export abstract class CategoriaPort {
    abstract listarTodos(): Promise<ICategoriaRequest[]>;
}