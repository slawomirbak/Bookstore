import { Injectable } from '@angular/core';
import { AllertMessageComponent } from 'src/app/shared/UI/allert-message/allert-message.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
    providedIn: 'root'
})
export class SnackBarInfo {
    constructor(private snackBar: MatSnackBar) {}

    formError(errorMessage: string) {
        this.snackBar.openFromComponent(AllertMessageComponent, {
            data: { message: errorMessage, error: true},
            duration: 5 * 1000,
        });
    }
    formOk(infoMessage: string) {
        this.snackBar.openFromComponent(AllertMessageComponent, {
            data: { message: infoMessage, error: false},
            duration: 5 * 1000,
        });
    }
}
