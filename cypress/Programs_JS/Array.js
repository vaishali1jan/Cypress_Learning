const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits[0]="kakadi"
 for(let fruit of fruits) 
    {console.log(fruit)
    }


    console.log(fruits.length)
   
    fruits.shift()
    console.log(fruits)


    fruits.unshift("Tomato")
    console.log(fruits)

    fruits.pop();
    console.log(fruits)

    fruits.push("Batata")
    console.log(fruits)

    let A1= fruits.toString();
    console.log(A1)


    let A2=fruits.join(" * ");
    console.log(A2)
 