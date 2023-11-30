import { Component, OnInit } from '@angular/core';
import { UserAuth } from 'src/app/shared/models/UserAuth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;

  constructor(
    fb: FormBuilder,
    private _authService: AuthService,
    private router: Router,
  ) { 
    this.form = fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    //TODO replace this for a JWT login
    let model: UserAuth = this.form.value;
    localStorage.setItem('accessToken', btoa(`${model.userName}:${model.password}`));
    this.router.navigate(['/']);
  }

  submitGuest() {

  }
}
