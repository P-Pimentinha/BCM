const user = {
  name: 'John Doe',

  email: 'john.doe@example.com',

  age: 25,

  dob: '08/02/1989',

  active: true,
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
