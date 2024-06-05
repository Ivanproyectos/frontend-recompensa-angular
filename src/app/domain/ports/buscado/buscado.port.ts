import { IBuscadoRequest } from "../buscado/buscado.dto";
export abstract class BuscadoPort {
    abstract listarTodos(): Promise<IBuscadoRequest[]>;
}