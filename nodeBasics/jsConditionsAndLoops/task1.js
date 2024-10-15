// Завдання 1: Визначення рівня успішності студента

const averageGrade = 100;
let message;

if (averageGrade < 60) {
   message = 'Незадовільно'
} else if (averageGrade >= 60 && averageGrade <= 70){
    message = 'Задовільно'
}
 else if (averageGrade >= 71 && averageGrade <= 80){
    message = 'Добре'
}
else if (averageGrade >= 81 && averageGrade <= 90){
    message = 'Дуже добре'
}
else if(averageGrade >= 91 && averageGrade <= 100){
    message = 'Відмінно'
}
else {
    message = 'Середня оцінка має бути від 0 до 100'
}

console.log(message)