const person = 
    [
        {
            firstName: "John",
            lastName: "Doe",
            age: 46,
            cities: ["mumbai", "Pune", "Nashik"]
        },

        {
            firstName: "vaishali",
            lastName: "mhapankar",
            age: 40,
            cities: ["mumbai", "pune", "nashik","ambad"]
        }
    ]
const kk= ["mumbai", "pune", "nashik","ambad"]
console.log(person[0].firstName)
console.log(person[1].firstName)
console.log(person[1].cities[2])
kk.push("atesting")
console.log(kk)
kk.sort()
console.log(kk)
console.log(kk.length)
//kk.forEach(console.log)


const points = [40, 100, 1, 5, 25, 10];
points.push(222)
console.log(points)

points.sort()
console.log(points)

points.shift() 
console.log(points)

points.pop() 
console.log(points)

points.unshift(444) 
console.log(points)

delete(points[0])
console.log(points)

const arows=[4,5,6,7]

console.log(arows.concat(points))
