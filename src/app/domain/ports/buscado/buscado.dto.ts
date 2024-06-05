import { ICategoriaRequest } from "../categoria/categoria.dto";
import { INivelPeligroRequest } from "../nivelPeligro/nivelPeligro.dto";

export interface IBuscadoRequest {
    id: number
    nombre: string
    apellidos: string
    alias: string
    descripcion: string
    recompensa: number
    categoriaId: number
    image: string, 
    categoria: ICategoriaRequest
    nivelPeligro: INivelPeligroRequest
}