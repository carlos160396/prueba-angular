import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  constructor() {}

  empleados: Empleado[] = [];

  addEmpleado(empleado: Empleado) {
    let arrayOrder = [...this.empleados];
    arrayOrder.push(empleado);

    arrayOrder.sort((a, b) => a.nombre.localeCompare(b.nombre));
    this.empleados = arrayOrder;
  }

  observe = new Observable<Empleado[]>((observe) => {});

  listEmpleado(): Empleado[] {
    return this.empleados;
  }
}
