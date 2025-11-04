import { Injectable } from '@nestjs/common';
import { Departments } from './departments.interface';

@Injectable()
export class DepartmentsService {
    // Atributos
    private departaments: any = [];

    // Métodos
    getAllDepartments() {
        // return { 'respuesta': 'Listado con todos los departamentos' };
        return { 'respuesta': this.departaments };
    }

    getOneDepartment(id: string) {
        const departmentFound = this.departaments.find(
            (departments) => departments.id === id,
        );

        if (!departmentFound) {
            return { 'respuesta': `Departamento con id ${id} no encontrado` };
        }

        // return { 'respuesta': `Departamento con id ${id}` };
        return { 'respuesta': departmentFound };
    }

    createOneDepartment(department: Departments) {
        this.departaments.push(department);
        return { 'respuesta': 'Departamento creado con exito' };
    }
}
