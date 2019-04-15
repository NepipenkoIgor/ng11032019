import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    public signUpForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.signUpForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(5)]],
            surname: ['', [Validators.required, Validators.minLength(5)]],
            emails: this.fb.array([['first@gmail.com', [Validators.required, Validators.minLength(5)]]]),
            passwordGroup: this.fb.group({
                password: ['', [Validators.required, Validators.minLength(5)]],
                cpassword: ['', [Validators.required, Validators.minLength(5)]],
            }),
        });
    }

    public addEmail(): void {
        (this.signUpForm.get('emails') as FormArray).push(
            new FormControl('', [Validators.required, Validators.minLength(5)])
        );
    }

    public removeEmail(index: number): void {
        (this.signUpForm.get('emails') as FormArray).removeAt(index);
    }
}
