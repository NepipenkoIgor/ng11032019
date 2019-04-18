import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
            firstName: ['', [Validators.required, Validators.minLength(5), this._nameValidator]],
            surname: ['', [Validators.required, Validators.minLength(5)]],
            emails: this.fb.array([['first@gmail.com', [Validators.required, Validators.minLength(5)]]]),
            isMale: [true],
            passwordGroup: this.fb.group(
                {
                    password: ['', [Validators.required, Validators.minLength(5)]],
                    cpassword: ['', [Validators.required, Validators.minLength(5)]],
                },
                {
                    asyncValidators: this._asyncEqualValidator,
                }
            ),
        });
        setTimeout(() => {
            this.signUpForm.patchValue({ isMale: false });
        }, 5000);
    }

    public addEmail(): void {
        (this.signUpForm.get('emails') as FormArray).push(
            new FormControl('', [Validators.required, Validators.minLength(5)])
        );
    }

    public removeEmail(index: number): void {
        (this.signUpForm.get('emails') as FormArray).removeAt(index);
    }

    private _nameValidator({ value }: FormControl): ValidationErrors | null {
        const valid: boolean = /^[a-zA-Z]*$/.test(value);
        const err: ValidationErrors | null = valid
            ? null
            : {
                  'Tолько буквы': true,
              };
        return err;
    }

    private _asyncEqualValidator(control: FormGroup): Observable<ValidationErrors | null> {
        console.log(control.parent.value);
        const { value } = control;
        const [password, cpassword] = Object.values(value);
        const err: ValidationErrors | null =
            password === cpassword
                ? null
                : {
                      'Значение полей не совпадает': true,
                  };
        return of(err).pipe(delay(3000));
    }
}
