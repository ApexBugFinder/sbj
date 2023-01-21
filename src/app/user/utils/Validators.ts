import { AbstractControl } from '@angular/forms';

export class UsernameValidators{
  static shouldBeUnique(control: AbstractControl) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (control.value == "andy")
          resolve({ shouldBeUnique: true });
        else
          resolve(null);
      }, 1000);

    });
  }
static cannotContainSpace(control: AbstractControl){
    if (control.value.indexOf(' ') >= 0)
      return {cannotContainSpace: true};

    return null;
  }
}
export class PasswordValidators {

 }
