// OBJECTS properties are CHANGABLE !!!!

const obj1 = {
  googleToken: 'adfaflakf;ufenoehovnseinos',
  facebookToken: 'asfdalksfeionvoieijofoew'
};

console.log(obj1);

obj1.googleToken = '';

console.log(obj1);

// SOLUTION ----------------
Object.freeze(obj1);

console.log(obj1);

obj1.facebookToken = '';

console.log(obj1);
