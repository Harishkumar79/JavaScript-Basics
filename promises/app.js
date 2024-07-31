// Promises (this are used to avoide callback hell problems)


// example 1
{
    function getData1(userdata) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("number", userdata)
                resolve("success")
            }, 2000)
        })
    }

    function getData2(userdata) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("number", userdata)
                reject("error")
            }, 2000)
        })
    }

    let d1 = getData1(1)
    d1.then((res) => {
        console.log(res)
        let d2 = getData2(2)
        d2.catch((err) => {
            console.log(err)
            console.log("\n\n")
        })
    })
}

console.log("\n\n")


// example 2
{
    function getData(userdata) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("data", userdata)
                resolve("success")
            }, 5000)
        })
    }

    getData(1).then(() => {
        getData(2).then(() => {
            getData(3).then(() => {
                getData(4).then(() => {
                    getData(5).then(() => {
                        console.log("success")
                    })
                })
            })
        })
    })
}