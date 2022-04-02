import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserDto, UserService } from 'src/app/user/user.service';
import { emailValidator, passwordMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'email': new FormControl('', [Validators.required, emailValidator]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      'repeatPassword': new FormControl('', [passwordMatch(this.passwordControl)]),
    }),
    'address': new FormControl(''),
    'phone': new FormControl('')
  })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  handleRegister(): void {
    const { name, username, email, passwords, address, phone } = this.registerFormGroup.value;

    const body: CreateUserDto = {
      name: name,
      username: username,
      email: email,
      password: passwords.password,
      address: address,
      phone: phone
    }


    this.userService.register$(body).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

}
