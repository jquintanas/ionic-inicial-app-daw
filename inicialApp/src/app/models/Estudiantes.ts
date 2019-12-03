export interface Estudiante {
    matricula: String;
    nombre: String;
    semestre: Number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Estudiantes {
    Estudiantes: Array<Estudiante>;
}