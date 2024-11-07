// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo. 

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user.

// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
// Присвойте значення отримані від цих виразів до змінних.

function fetchTodo(){
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => { return response.json() })
    // .then(todo => {
    //     console.log(todo)
    // })
    .catch(error => console.error('Error: ', error));
    }

// fetchTodo();

function fetchUser(){
    return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => { return response.json() })
    // .then(user=> {
    //     console.log(user)
    // })
    .catch(error => console.error('Error: ', error));
    }

// fetchUser();

Promise.all([fetchTodo(), fetchUser()])
    .then(results =>{
        let [todo, user] = results;
        console.log('Promise.all (Todo):', todo);
        console.log('Promise.all (User):', user);
    })
    .catch(error =>{
        console.error('Promise.all (error):', error )
    });

Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('Promise.race (first result):', result);
    })
    .catch(error =>{
        console.error('Promise.race (error):', error);
    });
