const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

const jane = {...john, name:'jane'}
jane.hobbies = [...jane.hobbies, 'MuayThai', 'Programming']


console.log('John:', john)
console.log('Jane:', jane)
