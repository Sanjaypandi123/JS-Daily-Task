let option = prompt("choose ur option : \n 1. number students u want \n 2. number of students u want to remove \n 3. convert tostring  \n 4. seperator changes \n 5. student detials \n 6. find student name index value \n 7. Exit")
let array = []
let ischeck = true
while(ischeck){
switch (option) {
    case "1":
        let stcount = prompt("enter the number students u want :")
        for (let stname = 0; stname < stcount; stname++) {
            if (stname < stcount) {
                let name = prompt("Enter the student name")
                array.push(name)
            } else {
                
            }
        }
        console.log(array)
        break;

    case "2":
        let remcount = prompt("Enter the number of students u want to remove :")
        for (let del = 0; del < remcount; del++) {
            array.pop(remcount)
        }
        console.log(array)
        break;
    case "3":
        let string = array.toString()
        console.log(string)
        break;
    case "4":
        let seperator = prompt("enter the symble u want to change :")
        let sep = array.join(seperator)
        console.log(sep)
        break;
    // case "5":
    //     console.log("===============================================")
    //     console.log(case1)
    //     console.log(case2)
    //     console.log(case3)
    //     console.log(case4)
    //     console.log("===============================================")
    //     break
    // case "6":
    //     let idx = prompt("enter the name u want find the index value :")
    //     let idxvalue = array.findIndex(idx)
    //     console.log(idxvalue)
    //     break;
    case "7":
        ischeck=false;
        break;
    default:
        alert("invalid option  .  1-7 option only")

}

}