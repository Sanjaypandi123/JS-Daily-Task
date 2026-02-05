// object
// =========

// Syntax
// =========

/*

literal object
==============

let variable = {
    key1 : value1
    key2 : value2
    key3 : value3
}

constructor object
==================

let variable = new object({
    key1 : value1
    key2 : value2
    key3 : value3
})

*/

let student = {
    rollNo: 1001,
    stname: "sanjay",
    phone: 8220316161,
    email: "sanjay@gmail.com",
    detailaddress: {
        doorNo: 1412,
        district: "Trichy",
        city: "samayapuram",
        thaluk: "mannai",
    },
    marks: {
        tamil: 60,
        english: 50,
        maths: 55,
        science: 65,
    }
}

console.log(student, typeof student)

// accsess types
// ==============

// 1=>dot notation,
// 2=>bracket notation.

// dot
// ======

console.log(student.phone)
console.log(student.detailaddress.thaluk)

// bracket
// ======

console.log(student["email"])
console.log(student["marks"]["tamil"])

// add element
// ============

student.dob = "03-06-2005"
console.log(student.dob)
student.age = 21
console.log(student.age)
student.detailaddress.pinNo = 621112
console.log(student.detailaddress.pinNo)

// delete element
// ==============

delete student.age
console.log(student.age);
delete student["age"]
console.log(student["age"]);

// update the element 
// ===================

student.email="siva@gmail.com"
console.log(student.email);
student["email"]="siva@gmail.com"
console.log(student["email"]);

// see only all the key names
// ==========================

let key = Object.keys(student)
console.log("student-bio-keys",key);
let key1 = Object.keys(student.detailaddress)
console.log("detailaddress-keys",key1);
let key2 = Object.keys(student["marks"])
console.log("student-marks-keys",key2);

// see only all the values
// ==========================

let value = Object.values(student)
console.log("student-bio-value",value);
let value1 = Object.values(student.detailaddress)
console.log("detailaddress-value",value1);
let value2 = Object.values(student["marks"])
console.log("student-marks-value",value2);

// see only all the key-names and values
// =====================================

let key_value = Object.entries(student)
console.log("student-bio-key&valus",key_value);
let key_value1 = Object.entries(student.detailaddress)
console.log("detailaddress-key&valus",key_value1);
let key_value2 = Object.entries(student["marks"])
console.log("student-marks-key&valus",key_value2);


