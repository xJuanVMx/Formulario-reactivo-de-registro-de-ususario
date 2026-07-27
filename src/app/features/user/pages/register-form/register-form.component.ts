import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: false,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {

  form: FormGroup;
  datosRegistrados: any = null;
  showPassword = false;
showPasswordCon = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        apodo: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
        age: [null, [Validators.required, Validators.min(15), Validators.max(90)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        passwordCon: ['', [Validators.required, Validators.minLength(8)]],
        terminos: [false, Validators.requiredTrue]
      },
      {
        validators: this.passwordMatchValidator
      }
    );
  }

  passwordMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {

    const password = control.get('password')?.value;
    const passwordCon = control.get('passwordCon')?.value;

    if (password === passwordCon) {
      return null;
    }

    return { passwordMismatch: true };
  }

  isInvalid(controlName: string, errorCode: string): boolean {
    const control = this.form.get(controlName);

    if (!control) {
      return false;
    }

    const hasError = control.hasError(errorCode);
    const touchedOrDirty = control.touched || control.dirty;

    return hasError && touchedOrDirty;
  }

  onClick() {
    if (this.form.valid) {
      this.datosRegistrados = {
        nombre: this.form.value.name,
        usuario: this.form.value.apodo,
        edad: this.form.value.age,
        correo: this.form.value.email
      };
    } else {
      this.form.markAllAsTouched();
    }
  }
}