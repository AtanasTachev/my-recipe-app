import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { TokenPayload } from 'src/app/core/interfaces/auth';
import { CreateUserDto } from 'src/app/user/user.service';
import { emailValidator, passwordMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  credentials: TokenPayload = {
    username: '',
    password: ''
  };

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    'name': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'username': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'email': new FormControl('', [Validators.required, emailValidator]),
    'address': new FormControl(''),
    'phone': new FormControl(''),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      'repeatPassword': new FormControl('', [passwordMatch(this.passwordControl)]),
    })
  })

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  handleRegister(): void {
    const { name, username, email, address, phone, passwords } = this.registerFormGroup.value;

    const body: CreateUserDto = {
      name: name,
      username: username,
      email: email,
      address: address,
      phone: phone,
      password: passwords.password,
      repeatPassword: passwords.repeatPassword
    }


    this.authService.register$(body).subscribe(() => {
      this.router.navigate(['/home']);
    })
  }

}
