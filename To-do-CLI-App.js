/*
TODO LIST in JavaScript.

=> Features.
    => Add a todo - "new".
    => List All todo - "list".
    => "delete" - Remove sepcific todo.
    => "quit" - Quit App.

=> JS topics used.
    => For loop.
    => While loop.
    => prompt to get todo.
    => if else conditionals.
    => Array to store the todos.
    => splice to delete the todo from array.

*/

let input = prompt('What would like to enter : ')
const todo = []

while (input !== 'quite' && input !== 'q') {
  if (input === 'list') {
    console.log('***********')
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i} : ${todo[i]}`)
    }
    console.log('***********')
  } else if (input === 'new') {
    const newTodo = prompt('Enter a todo : ')
    todo.push(newTodo)
    console.log(`${newTodo} : added to the list`)
  } else if (input === 'delete') {
    indexNum = parseInt(
      prompt('Enter the index no of the todo list you want to del : '),
    )
    todo.splice(indexNum, 1)
  }

  input = prompt('What would you like to add : ')
}

console.log('Okay quiting...!!');
