// let age = prompt("sheiyvane asaki")
// window.localStorage.setItem("age", age)
//     console.log(age);

// let userAge = window.localStorage.getItem("age")
// console.log(userAge)

// window.localStorage.removeItem("age")

// window.localStorage.clear()

// let userList = []
// let userCount = Number(prompt("შეიყვანეთ მომხმარებლის რაოდენობა"))

// for( let i=0;i<userCount; i++){
//     let firstname = prompt("შეიყვანეთ მომხმარებლის სახელი")
//     let age = prompt ("შეიყავნეთ მომხმარებლის ასაკი")
//     let userObject ={
//         id:i,
//         firstname,
//         age,
//     }
//     userList.push(userObject)
// }

// let strUsersList = JSON.stringify(userList)

//  localStorage.setItem("userList", strUsersList)
// console.log(userList);

// let strUsersList = localStorage.getItem("userList")
// let userList = JSON.parse(strUsersList)
// console.log(userList);


// let age = localStorage.getItem("age")
// console.log(age);


let age = localStorage.getItem("age")
if(age == null){
    age = prompt("შეიყვანე ასაკი")
    localStorage
}









