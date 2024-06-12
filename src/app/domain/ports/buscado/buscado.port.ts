import { IBuscadoRequest, IBuscadoResponse } from "../buscado/buscado.dto";
export abstract class BuscadoPort {
    abstract listarTodos(filtro: IBuscadoRequest): Promise<IBuscadoResponse[]>;
    abstract obtenerBuscadoPorId(id: number): Promise<IBuscadoResponse>;
}