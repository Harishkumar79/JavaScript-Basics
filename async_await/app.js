// Async and await (it overcomes the problems of callback hell and promises)


function getData(userdata, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", userdata)
            resolve("success")
        }, 5000)
    })
}

async function getAllData() {
    console.log("Executing Normal Function")
    console.log("getting data...1")
    await getData(1)
    console.log("getting data...2")
    await getData(2)
    console.log("getting data...3")
    await getData(3)
    console.log("getting data...4")
    await getData(4)
    console.log("getting data...5")
    await getData(5)
    console.log("Done")
}


// IIFE :- Immediately Invoked Function Expression 
// it run only one time and we not need to call it , this will call automatically

(async function () {
    console.log("Executing IIFE Function")
    console.log("getting data...1")
    await getData(1)
    console.log("getting data...2")
    await getData(2)
    console.log("getting data...3")
    await getData(3)
    console.log("getting data...4")
    await getData(4)
    console.log("getting data...5")
    await getData(5)
    console.log("Done")
    console.log("\t\t")
})();

