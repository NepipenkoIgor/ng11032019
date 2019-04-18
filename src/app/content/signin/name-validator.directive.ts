import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appNameValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: NameValidatorDirective,
            multi: true,
        },
    ],
})
export class NameValidatorDirective implements Validator {
    public validate({ value }: FormControl): ValidationErrors | null {
        const valid: boolean = /^[a-zA-Z]*$/.test(value);
        const err: ValidationErrors | null = valid
            ? null
            : {
                  'Tолько буквы': true,
              };
        return err;
    }
}
