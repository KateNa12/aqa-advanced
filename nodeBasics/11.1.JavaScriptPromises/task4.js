// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.


class TodoService {
  // Метод для запиту Todo
  async fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
  
  // Метод для обробки Promise.all
  async fetchAllData(todoService, userService) {
    try {
      const [todo, user] = await Promise.all([todoService.fetchTodo(), userService.fetchUser()]);
      console.log('Promise.all - Todo:', todo);
      console.log('Promise.all - User:', user);
    } catch (error) {
      console.error('Promise.all Error:', error);
    }
  }
  
  // Метод для обробки Promise.race
  async fetchRaceData(todoService, userService) {
    try {
      const result = await Promise.race([todoService.fetchTodo(), userService.fetchUser()]);
      console.log('Promise.race - First resolved:', result);
    } catch (error) {
      console.error('Promise.race Error:', error);
    }
  }
}
  
class UserService {
  // Метод для запиту User
  async fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
}
  
// Створення екземплярів класів
const todoService = new TodoService();
const userService = new UserService();
  
// Виклик методів для Promise.all та Promise.race
todoService.fetchAllData(todoService, userService);  // Викликаємо fetchAllData для обробки Promise.all
todoService.fetchRaceData(todoService, userService); // Викликаємо fetchRaceData для обробки Promise.race