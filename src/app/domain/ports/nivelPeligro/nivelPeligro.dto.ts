export interface INivelPeligroRequest {
    id: number;
    nombre: string;
}

export interface INivelPeligroIcon {
    className: string;
    icon: string;
}

export const NivelPeligro: { [key: string]: INivelPeligroIcon } = {
    "Riesgo Bajo": { icon: "bx bx-shield-alt-2", className: "success" },
    "Moderado": { icon: "bx bx-info-circle", className: "primary" },
    "Peligroso": { icon: "bx bx-info-circle", className: "danger" },
    "default": { icon: "bx bx-info-circle", className: "info" }
}