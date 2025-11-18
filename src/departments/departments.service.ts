import { Injectable } from '@nestjs/common';
import { Departments } from './departments.interface';

@Injectable()
export class DepartmentsService {
    // Atributos
    private departments: any = [];

    // Métodos
    getAllDepartments() {
        return this.departments;
    }

    getOneDepartment(id: string) {
        return this.departments.find((department) => department.id === id);
    }

    createOneDepartment(department: Departments) {
        this.departments.push(department);
        return { respuesta: 'Departamento creado con éxito' };
    }

    updateOneDepartment(id: string, department: Departments) {
        const departmentFound = this.departments.find((d) => d.id === id);
        if (!departmentFound) {
            return { respuesta: `Departamento con id ${id} no encontrado` };
        }

        const posicion: number = parseInt(
            this.departments.findIndex((d) => d.id === id).toString()
        );
        this.departments.splice(posicion, 1, department);

        return { respuesta: 'Departamento actualizado con éxito' };
    }

    deleteOneDepartment(id: string) {
        const departmentFound = this.departments.find((d) => d.id === id);
        if (!departmentFound) {
            return { respuesta: `Departamento con id ${id} no encontrado` };
        }

        const posicion: number = parseInt(
            this.departments.findIndex((d) => d.id === id).toString()
        );
        this.departments.splice(posicion, 1);

        return { respuesta: 'Departamento borrado con éxito' };
    }
}
