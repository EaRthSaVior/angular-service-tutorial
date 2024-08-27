import { Account } from './account.model';

export class AccountService {
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
  }

  statusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
