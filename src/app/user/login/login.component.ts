import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UsernameValidators } from '../utils/Validators';


function passMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  let passControl = c.get('pass');
  let confirmControl = c.get('confirmPass');
  if (passControl && confirmControl) {
    if (passControl.pristine || confirmControl.pristine) {
      return null;
    }

    if (passControl.value === confirmControl.value) {
      return null;
    }
  }
    return { match: true };
  }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      username: ['', ],
      password: ['']

    });
  }

  ngOnInit(): void {

  }
  login() {

  }

}
