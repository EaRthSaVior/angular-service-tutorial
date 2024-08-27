import { EventEmitter, Injectable, Output } from '@angular/core';
import { Account } from './account.model';
import { LoggingService } from './logging.service';
@Injectable()
export class AccountService {
  @Output() statusAlert = new EventEmitter<string>();
  constructor(private loggingService: LoggingService) {}
  private accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  get getAccounts() {
    return this.accounts;
  }

  accountAdded(newAccount: Account) {
    this.accounts.push(newAccount);
    this.loggingService.logStatusChange(newAccount.status);
  }

  statusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.logStatusChange(updateInfo.newStatus);
  }
}
