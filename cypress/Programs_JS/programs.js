
function findCharOccurance() {

    var string = "programing experiance"
    // var char= "e"
    // let count=0
    // console.log(string.length)
    // //for (let i=0; i< string.length;i++)
    //     for (let i of  string)
    // {
    //    if (i === char) 
    //    {
    //     count++
    //    }
    // }

    let count = string.match(/e/g)

    console.log(count)
}




function findDuplicateCharinString() {

    var string = "programing experiance"
    var char = "e"
    let count = 0
    console.log(string.length)
    //for (let i=0; i< string.length;i++)
    for (let i of string) {
        if (i === char) {
            count++
        }
    }

    console.log(count)
}


// function findCharacterOccurrences(str) {
//     const charCount = {}; // Object to store character counts

//     // Count occurrences of each character
//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     // Output the result
//     console.log("Character occurrences in the string:");
//     for (let char in charCount) {
//         console.log(`${char}: ${charCount[char]} times`);
//     }
// }

// // Example usage:
// const input = "example string";
// findCharacterOccurrences(input);


function PrintLAst5Char() {
    let mystring = "ttssddffgg"

    let gg = mystring.slice(5)
    let kk = mystring.slice(-5)
    console.log(gg)
    console.log(kk)


}





function StringAn() {

    var str1 = "tesla"
    var str2 = "slate"
    var flag = true;
    for (var i = 0; i < str1.length; i++) {
        var check = str2.search(str1[i])
        console.log(check)
        if (check == "-1") {
            console.log("String is not Ant ")
            flag = false;
            break;
        }
    }

    if (flag) console.log("String is Ant ")
}


//Verify if string is (made from same characters in it)
function InterviewQuesionString() {

    var str1 = "tesla"
   // var str2 = "slate"
    var str2 = "slate"
  

    if (str1.length == str2.length) {
        var flag = false;
        //debugger
        for (var i = 0; i < str1.length; i++) {
            var check = str2.search(str1[i])
            if (check == "-1") {
                flag = false;
                break;
            }
            else
            {
                flag =true
            }
        }
        console.log(flag)
    }
    else{
        console.log("length of string not same")
    }  
}

InterviewQuesionString()

// function CharOccuranceinString() {
//     var string = "programing experiance"
//     for (let i = 0; i < string.length; i++) {
//         //console.log(string[i])
//         var checkq=/string[i]/g
//         //var checkq = "e"
//         console.log(string[i])
//         console.log(string.matchAll(checkq))

//     }
// }

// CharOccuranceinString()