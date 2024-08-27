import { Component } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account.model';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService],
})
export class AppComponent {
  accounts: Account[] = [];
  constructor(private accountService: AccountService) {
    this.accounts = this.accountService.getAccounts;
    this.accountService.statusAlert.subscribe((status: string) => {
      alert(`Account status changed to ${status}`);
    });
  }
}
