// ------------------------------------------------
// ------------------------------------------------
// WARNING - context of a function vs. arrow function
// ------------------------------------------------
// ------------------------------------------------
const someObject = {
  names: ['Lukas', 'Adam'],
  city: 'Prague',
  getInfo: function() {
    return this.names.map(function(item) {
      return `${item} from ${this.city}`;
    });
  }
};

console.log(someObject.getInfo());

// VS

const someObject2 = {
  names: ['Lukas', 'Adam'],
  city: 'Prague',
  getInfo: function() {
    return this.names.map(item => {
      return `${item} from ${this.city}`;
    });
  }
};

console.log(someObject2.getInfo());
