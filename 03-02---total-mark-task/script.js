let student = []
let submit = () => {
    debugger;
    let name = document.getElementById("sname")
    let snameerr = document.getElementById("snameerr")

    if (name.value === "") {
        snameerr.style.border = "1px solid red"
        snameerr.innerText = "Enter ur name"
        return;
    } else {
        snameerr.innerText = " "
        student.push(name.value)
    }
    let tm = document.getElementById("tam-mrk")
    let tamerr = document.getElementById("tamerr")

    if (tm.value === "") {
        tamerr.style.border = "1px solid red"
        tamerr.innerText = "Enter ur tamil mark"

        return;
    } else if (Number(tm.value < 0) || Number(tm.value > 100)) {
        tamerr.style.border = "1px solid red"
        tamerr.innerText = "mark should be within 0 and 100"
        return;
    } else {
        tamerr.innerText = " "
        student.push(tm.value)
    }
    let em = document.getElementById("eng-mrk")
    let engerr = document.getElementById("engerr")

    if (em.value === "") {
        engerr.style.border = "1px solid red"
        engerr.innerText = "Enter ur english mark"

        return;
    } else if (Number(em.value < 0) || Number(em.value > 100)) {
        engerr.style.border = "1px solid red"
        engerr.innerText = "mark should be within 0 and 100"
        return;
    } else {
        engerr.innerText = " "
        student.push(em.value)
    }
    let mm = document.getElementById("math-mrk")
    let matherr = document.getElementById("matherr")

    if (mm.value === "") {
        matherr.style.border = "1px solid red"
        matherr.innerText = "Enter ur maths mark"

        return;
    } else if (Number(mm.value < 0) || Number(mm.value > 100)) {
        matherr.style.border = "1px solid red"
        matherr.innerText = "mark should be within 0 and 100"
        return;
    } else {
        matherr.innerText = " "
        student.push(mm.value)
    }
    let sm = document.getElementById("sci-mrk")
    let scierr = document.getElementById("scierr")

    if (sm.value === "") {
        scierr.style.border = "1px solid red"
        scierr.innerText = "Enter ur science mark"

        return;
    } else if (Number(sm.value < 0) || Number(sm.value > 100)) {
        scierr.style.border = "1px solid red"
        scierr.innerText = "mark should be within 0 and 100"
        return;
    } else {
        scierr.innerText = " "
        student.push(sm.value)
    }
    let ssm = document.getElementById("ss-mrk")
    let sserr = document.getElementById("sserr")

    if (ssm.value === "") {
        sserr.style.border = "1px solid red"
        sserr.innerText = "Enter ur social mark"

        return;
    } else if (Number(ssm.value < 0) || Number(ssm.value > 100)) {
        sserr.style.border = "1px solid red"
        sserr.innerText = "mark should be within 0 and 100"
        return;
    } else {
        sserr.innerText = " "
        student.push(ssm.value)
    }

    let avarage = avg(student)

    let outavg = document.getElementById("avarage")
    outavg.innerText = avarage

    let total = tot(student)

    let outtot = document.getElementById("total")
    outtot.innerText = total

    let outname =document.getElementById("stname")
    outname.innerText = outname

    //     console.log(student)
    //     let average = avg(student)
    //     console.log(average);
    //     let total = tot(student)
    //    console.log(total)
}

let avg = (array) => {
    debugger;
    let [name, ...marks] = array
    let sum = 0
    for (let i of marks) {
        sum += Number(i)
    }
    let aa = sum / (marks.length)
    return aa


}
let tot = (array) => {
    debugger;
    let [name, ...marks] = array
    let sum = 0
    for (let i of marks) {
        sum += Number(i)
    }
    return sum

}