var odd = [1, 3, 5, 7];
var even = [2, 4, 6, 8, 10];
var allNum = [...odd, ...even];
console.log({ allNum });

var allNum = [odd, ...even];
console.log({ allNum });

// setUsers([...oldUsers,newUser])
