

// 7).
// =========

// for(let a=1; a<=5; a++){
//     for(let b=1; b<=5; b++){
//         document.writeln(a,b)
//         }
//         document.writeln("<br>")
// }

// 9).
// ========

// debugger
// for(let a=1; a<=5; a++){
//     for(let b=1; b<=5; b++){
//         if(b<=a){
//             document.writeln(a,"&nbsp;")
//         }
//         else{
//             document.writeln("x")
//         }
//     }
//     document.writeln("<br>")
// }

// 3).
// ========

// debugger
// for(let a=1; a<=5; a++){
//     for(let b=5; b>=1; b--){
//         if(b<=a){
//             if(a%2 && b%2){
//                 document.writeln(a,"&nbsp")
//             }
//             else if(a%2==0 && b%2==0){
//                 document.writeln(a,"&nbsp")
//             }
//             else{
//                 document.writeln("##")
//             }
//         }
//         else{

//             document.writeln("##")
//         }
//     }
//     for(let c=2; c<=a; c++){
//         if(a%2 && c%2){
//             document.writeln(a)
//         }
//         else if(a%2==0 && c%2==0){
//             document.writeln(a)
//         }
//         else{
//             document.writeln("##")
//         }
//     }
//     document.writeln("<br>")
// }




// 5).
// ===========

// for (let i = 1; i <= 9; i++) {
//     if (i <= 5) {
//         for (let j = 1; j <= i; j++) {
//             document.writeln("*")
//         }
//     }
//     else {
//         for (let j = 9; j>=i; j--) {
//                 document.writeln("*")
//         }
//     }
//     document.writeln("<br>")
// }

        // OR
        // =====

// for(let i=1;i<=9;i++){
//     if(i<=5){
//         for(let j=1;j<=5;j++){
//             if(j<=i)
//                 document.writeln("*")  
//             else
//                 document.writeln("&nbsp&nbsp")
//         }
//     }
//     else{
//         for(let j=9;j>=i;j--){
//             document.writeln("*")
//         }
//     }
//         document.writeln("<br>")
// }




// 1).
// ========

// debugger
// let m=1
// for(let a=1; a<=5; a++){
//     for(let b=1; b<=5; b++){
//         document.writeln(m)
//         m++
//     }
//     document.writeln("<br>")
// }




// 6).
// =======

// for(let a=1; a<=5; a++){
//     for(let b=1; b<=5; b++){
//         document.writeln(b*a)
//     }
//     document.writeln("<br>")
// }

        // OR
        // ====

// for(let a=1; a<=5; a++){
//     for(let b=1; b<=5; b++){
//             if(a==1){
//             document.writeln(b*1)
//         }
//         else if(a==2){
//             document.writeln(b*2)
//         }
//         else if(a==3){
//             document.writeln(b*3)
//         }
//         else if(a==4){
//             document.writeln(b*4)
//         }
//         else{
//             document.writeln(b*5)
//         }
//     }
//     document.writeln("<br>")
// }




// 2).
// ========

// m=1
// for(let a=5; a>=1; a--){
//     for(let b=5; b>=a; b--){
//         document.writeln(m)
//         m++
//     }
//     document.writeln("<br>")
// }



// 4).
// ========

// for(let a=1; a<=5; a++){
//     for(let b=1; b<=5; b++){
//             if(b==1){
//             document.writeln("A")
//         }
//         else if(b==2){
//             document.writeln("B")
//         }
//         else if(b==3){
//             document.writeln("C")
//         }
//         else if(b==4){
//             document.writeln("D")
//         }
//         else{
//             document.writeln("E")
//         }
//     }
//     document.writeln("<br>")
// }


// 7).
// ========

// for(let a=5; a>=1; a--){
//     for(let b=1; b<=a; b++){
//         if(b==1){
//             document.writeln("a")
//         }
//         else if(b==2){
//             document.writeln("b")
//         }
//         else if(b==3){
//             document.writeln("c")
//         }
//         else if(b==4){
//             document.writeln("d")
//         }
//         else{
//             document.writeln("e")
//         }
//     }
//     document.writeln("<br>")
// }



// 8).
// =======

// debugger
// for(let a=5; a>=1; a--){
//     let m=2
//     out:for(let b=1; b<=9; b++){
//         if(a==1){
//             document.writeln("*")
//         }
//         else if(b<=5){
//             if(b==a){
//                 document.writeln("*") 
//             }
//             else{
//                 document.writeln("&nbsp;&nbsp;")
//             }
//         }
//         else if(a!=5){
//             if((b-m)==a){
//                 document.writeln("*")
//                 break out;
//             }
//             else{
//                 document.writeln("&nbsp;&nbsp;")
//             }
//              m+=2
//         }
//         else{
//             break out;
//         } 
//     }
//     document.writeln("<br>")
// }

for(let a=1; a<=5; a++){
    for(let b=1; b<=5; b++){
        if( b==1 || b==a){
            document.writeln("*")
        }
        else
            document.writeln("&nbsp;&nbsp;")
    }
    for(let b=4; b>=1; b--){
        if(b!=a && b!=1)
            document.writeln("&nbsp;&nbsp;")
        else
            document.writeln("*")
    }
    document.writeln("<br>")
}
for(let a=1; a<=5; a++){
    for(let b=1; b<=5; b++){
        if(b==a){
            document.writeln("*")
        }
        else
            document.writeln("&nbsp;&nbsp;")
    }
    for(let b=4; b>=1; b--){
        if(b!=a)
            document.writeln("&nbsp;&nbsp;")
        else
            document.writeln("*")
    }
    document.writeln("<br>")
}