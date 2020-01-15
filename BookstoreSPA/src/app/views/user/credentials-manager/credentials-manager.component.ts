import { Component, OnInit } from '@angular/core';
import { SnackBarInfo } from 'src/app/core/services/snackbar-info.service';


@Component({
  selector: 'app-credentials-manager',
  templateUrl: './credentials-manager.component.html',
  styleUrls: ['./credentials-manager.component.sass']
})
export class CredentialsManagerComponent implements OnInit {

  selectedIndex: number;
  constructor(private snackBarInfo: SnackBarInfo) {}

  ngOnInit() {
  }

  formError(errorMessage: string) {
    this.snackBarInfo.formError(errorMessage);
  }
  formOk(infoMessage: string) {
    this.snackBarInfo.formOk(infoMessage);
  }
}
