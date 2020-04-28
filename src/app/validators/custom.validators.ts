

import { AbstractControl, ValidationErrors } from '@angular/forms';

export class MyValidation {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') != -1) {
            return {
                spaceError: true
            }
        }
        return null;
    }

    static matchPassword(control: AbstractControl): ValidationErrors | null {
        if (control.get('password').value && control.get('confirmPassword').value) {
            if (control.get('confirmPassword').value === control.get('password').value) {
                return null;
            } else {
                return {
                    notMatched: true
                }
            }
        }
    }
}