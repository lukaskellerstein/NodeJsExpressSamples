// ---------------------------------------------------
// Inheritance II.
// ---------------------------------------------------

class baseModel {
  constructor(options = {}, data = []) {
    // class constructor
    this.name = 'Base';
    this.url = 'http://azat.co/api';
    this.data = data;
    this.options = options;
  }

  getName() {
    // class method
    console.log(`Class name: ${this.name}`);
  }

  getUrl() {
    // class method
    console.log(`Url: ${this.url}`);
  }
}

class AccountModel extends baseModel {
  constructor(options, data) {
    super({ private: true }, ['32113123123', '524214691']); //call the parent method with super
    this.name = 'Account Model';
    this.url += '/accounts/';
  }

  // getter
  get accountsData() {
    //calculated attribute getter
    // ... make XHR
    return this.data;
  }

  set accountsData(value) {
    this.data = value + "CCC";
  }
}

let accounts = new AccountModel(5);
accounts.getName();
accounts.getUrl();
console.log('Data is %s', accounts.accountsData);

accounts.accountsData = "CHANGED";
console.log('Data is %s', accounts.accountsData);
