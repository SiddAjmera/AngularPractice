import { Observable } from 'rxjs/Observable';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static unique(control: AbstractControl): ValidationErrors | null {
        if(control.value === 'kold') return { unique: true };
        return null;
    }

    static asyncUnique(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> | null {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve({ asyncUnique: true }), 2000);
        });
    }
}
