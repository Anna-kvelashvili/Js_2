"use strict";
//task_1
let a = 5;
while (a < 101) {
  console.log(a);
  a++;
}

//task_2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i < array1.length; i++) {
  const element = array1[i];
  if (element < 10)
    if (element > 0) {
      console.log(element);
    }
}
//anotherway 
// for (let result of array1) {
//     if (result > 0 && result < 10) {
//       console.log(result);
//     }
//   }

//task_3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
while ((array2 = 5)) {
  console.log("არის");
  break;
}
//task_4
let array3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array3.length; i++) {
  sum += array3[i];
  console.log(sum);
}
//task_5
let array4 = [1, 2, 3, 7, 6, 9];
let sum2 = 0;
for (let i = 0; i < array4.length; i++) {
  sum2 += array4[i];
  console.log(sum2 % 6);
  console.log(sum2 / array4.length);
}

//task_6
let array5 = [1, 2, 3, 7, 6, 9];
for (let numbers of array5) {
  if (numbers == 7) {
    continue;
  }
  console.log(numbers);
}

//task_7
let user = {
  firstName: "giorgi",
  lastName: "smith",
  age: 25,
  studentStatus: "active",
};
console.log(user.studentStatus);

//task_8
let user1 = {
  name: "giorgi",
  age: 20,
  studentstatus: "active",
};
if (user1.age < 18) {
  console.log("hello");
} else if (user1.name == "Levan") {
  console.log("Hello Levan");
} else if (user1.studentstatus == "active" && user1.age < 25) {
  console.log("Hello world");
} else {
  console.log("error");
}

//task_9
let array6 = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];
for (let a = 0; a < array6.length; a++) {
  for (let b = 0; b < array6[a].length; b++) {
    let positive = array6[a][b];
    if (positive > 0) {
      console.log(positive);
    }
  }
}
//task_10
let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element % 2 === 0) {
    console.log("ლუწი");
  } else {
    console.log("კენტი");
  }
}

//task_11
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];
for (let p of users) {
  if (p.status == true) {
    console.log(p.username);
  }
}
