export interface ICategoriaRequest {
    id: number;
    nombre: string;
}
export const categoriaIcon: { [key: string]: string } = {
    Robo: "bx bx-run",
    Fraude: "bx bx-credit-card-alt",
    Contrabando:  "bx bx-car",
    Homicidio:  "bx bx-ghost"
}