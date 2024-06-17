import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl} from '@angular/forms'
import { LoginPort } from '../../../../domain/ports/auth/login.port';
import { ILoginRequest, ILoginResponse } from '../../../../domain/ports/auth/login.dto';
import { SessionService } from '../../../../application/services/session.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [SessionService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 constructor(private loginPort: LoginPort,
  private formBuilder: FormBuilder, 
  private sessionService: SessionService, 
  private router: Router) { 
   
 }
  isTypePassword = true
  errorLogin!: string;
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.initializeForm();
  }

 async login():Promise<void> {
  this.errorLogin = '';
    if (this.loginForm.valid) {
      try{
        const { token, expires }= await this.loginPort.login(this.loginForm.value);
        console.log(expires);
        this.sessionService.setSession(token, expires);
        this.router.navigate(['/buscados/registro']);
      }catch(error: HttpErrorResponse | any){
        if(error.status === 401){
          this.errorLogin = '❌ Credenciales incorrectas';
        }else{
          console.error(error)
          this.errorLogin = 'Error al iniciar sesión, intentelo más tarde 🥲';
        }
      }
    }
  }
  isValid(name: string):boolean {
    const fieldName = this.loginForm.get(name)
    return !!(fieldName?.invalid && fieldName?.dirty)
  }
  isRequired(name: string): boolean {
    const fieldName = this.loginForm.get(name)
    return !!(fieldName?.hasError('required') && fieldName?.dirty)
  }
  initializeForm() {
    this.loginForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

}
