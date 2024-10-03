import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmpleadosService } from './services/empleados.service';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  formulario!: FormGroup;
  allEmpleados: Empleado[] = [];

  constructor(
    private _form: FormBuilder,
    private _empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    this.formulario = this._form.group({
      nombre: [''],
      apellido: [''],
      telefono: [''],
    });

    this._empleadosService.observe.subscribe({
      next: (res) => {
        // this._empleadosService.addEmpleado()
      },
    });
  }

  onSave() {
    const newEmpleado: Empleado = {
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      telefono: this.formulario.value.telefono,
    };
    this._empleadosService.addEmpleado(newEmpleado);
    this.allEmpleados.push(newEmpleado);
    this.formulario.reset();
  }
}
