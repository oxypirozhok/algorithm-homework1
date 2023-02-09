// Найти индекс заданного числа в массиве: {3, 6, 4, 7, 2, 1, 9}
// Алгоритм на вход должен получать любой массив и одну цифру, индекс которой требуется найти.

 function search (arr, num){
   for (let key in arr){
     if(arr[key] === num){
       alert (`The index of the number is: ${key}`);
     }   
}
}
 search([3, 6, 4, 7, 2, 1, 9], 7);

//Реализовать алгоритм, который будет находить сумму квадратов всех элементов массива!  {3, 6, 4, 7, 2, 1, 9}

// function square (arr){
//   let sum = 0;
//   for (let key in arr){
//   sum += arr[key] ** 2 
//   } 
//   console.log(sum);
// }

// square([3, 6, 4, 7, 2, 1, 9]);