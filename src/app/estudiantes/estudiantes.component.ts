import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})



export class EstudiantesComponent {
estudianteForm: FormGroup;
nombreControl =new FormControl ("", [Validators.required, Validators.minLength(5)]) ;
apellidoControl = new FormControl ("",[Validators.required, Validators.minLength(5)]);
emailControl = new FormControl("", [Validators.required, Validators.email]); 

constructor(){
  this.estudianteForm = new FormGroup ({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
  })
}


onsubmit (): void{
  if( this.estudianteForm.valid){
    console.log (this.estudianteForm.value);
  } else {
    alert ('No es valido');
  }
}
}
