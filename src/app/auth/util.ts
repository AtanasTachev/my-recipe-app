 import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
        return null
    }

    if (!/.{6,}@gmail\.(bg|com)/.test(value)) {
        return {
            email: true,
        }
    }
    return null;
}


export function passwordMatch(passwordFormControl: AbstractControl) {
    const validtorFn: ValidatorFn = (repeatPasswordFormControl: AbstractControl) => {
        if (passwordFormControl?.value !== repeatPasswordFormControl?.value) {
            return {
                passwordMissmatch: true
            }
        }

        return null;
    }

    return validtorFn;
}

export function passwordMatch2(passwordFormControl: AbstractControl): ValidationErrors | null {
    const passwordGroup = passwordFormControl.parent as FormGroup;

    if (!passwordGroup) {
        return null;
    }

    const { password, repeatPassword } = passwordGroup.controls;
    if (password?.value !== repeatPassword?.value) {
        return {
            passwordMatch2: true
        }
    }

    return null;
}
