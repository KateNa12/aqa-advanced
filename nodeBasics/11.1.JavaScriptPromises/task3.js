// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити.

// Спосіб №1

async function fetchDataAsync(url){
  try {
    const response = await fetch(url);
    const data = await response.json();
    return console.log('Get Response:', data);
  } catch (error){
    console.error('Error:', error);
    throw error;
  }    
}

fetchDataAsync('https://jsonplaceholder.typicode.com/todos/1');

async function fetchUserAsync(url){
  try {
    const response = await fetch(url);
    const user = await response.json();
    return console.log('Get Response:', user);
  } catch (error){
    console.error('Error:', error);
    throw error;
  }    
}

fetchUserAsync('https://jsonplaceholder.typicode.com/users/1');


// Спосіб №2

async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

//   PromiseAll/PromiseRace

async function fetchAllData() {
  try {
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    console.log('Promise.all - Todo:', todo);
    console.log('Promise.all - User:', user);
  } catch (error) {
    console.error('Promise.all Error:', error);
  }
}


async function fetchRaceData(){
  try {
    const result = await Promise.race([fetchTodo(), fetchUser()]);
    console.log('Promise.race (first result):', result);
  } catch (error) {
    console.error('Promise.race (error):', error);
  }
}


fetchAllData();
fetchRaceData();
