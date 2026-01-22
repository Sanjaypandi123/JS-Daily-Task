// /*
// 1 0 1 0 1 0 1 0 1 0
// */
// // debugger
// for(let sanjay=1; sanjay<=10; sanjay++){
//     let pandi=sanjay%2;
//     if(sanjay%2){
//         document.writeln(pandi)
//     }
//     else{
//         document.writeln(pandi)

//     }
//     document.writeln("<br>")
// }

// // ======================================
// /*
// 0 1 0 1 0 1 0 1 0 1 
// */

// for(let jeeva=1; jeeva<=10; jeeva++){
//     let yuvi=jeeva%2 ? "0" : "1"
//         document.writeln(yuvi,"<br>")
// }


// //=================================
// /*
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// */


// for(let a=1; a<=5; a++){
//     for(let b=1; b<=5; b++){
//         document.writeln(b)
//     }
//     document.writeln("<br>")
// }


// // =================================
// /*

// *
// * *
// * * *
// * * * *
// * * * * *

// */


// // debugger
// for(let c=1; c<=5; c++){
//     for(let d=1; d<=c; d++){
//         document.writeln("#")
//     }
//     document.writeln("<br>")
// }
// // =================================
// /*
//         *
//       * *
//     * * *
//   * * * *
// * * * * * 

// */
// for(let c=1; c<=5; c++){
//     for(let d=5; d>=1; d--){
//         if(d>c){
//             document.writeln("&nbsp;&nbsp;&nbsp;")
//         }else{
//             document.writeln("#&nbsp;")
//         }
//     }
//     document.writeln("<br>")
// }

// // ==================================

// /*
// 5
// 4 4 
// 3 3 3
// 2 2 2 2
// 1 1 1 1 1
// */
// debugger
// for(let e=5; e>=1; e--){
//     for(let f=5; f>=e; f--){
        
//         document.writeln(e)
//     }
//     document.writeln("<br>")
// }

// // ======================================

// /*
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3 
// 1 2
// 1
// */
// for(let g=5; g>=1; g--){
//     for(h=1; h<=g; h++){
//         document.writeln(h)
//     }
//     document.writeln("<br>")
// }
// for(let i=1; i<=5; i++){
//     for(j=5; j>=i; j--){
//         document.writeln(j)
//     }
//     document.writeln("<br>")
// }













for(let a=5; a>=1; a--){
    for(let b=5; b>=a; b--){
        if(b<a)
            document.writeln("&nbsp;&nbsp;")
            else
                document.writeln("*")
    }
    document.writeln("<br>")
    }
    
    
    for(let i=5;i>=1;i--){
        for(let j=1;j<=i;j++){
            document.writeln("*")
        }
        document.writeln("<br>")
    }

    for(let i=5;i>=1;i--){
        for(let j=1;j<=5;j++){
            if(j<i)
                document.writeln("&nbsp&nbsp")
            else{
                document.writeln("*")
            }
            
        }
        document.writeln("<br>")
    }

