

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
}