// callback and callback hell

function getData(userdata,getNextData){
    setTimeout(()=>{
        console.log("data",userdata)
        if(getNextData){
            getNextData()
        }
    },5000)
}

// callback hell
getData(1,()=>{
    console.log("getting data2...")
    getData(2,()=>{
        console.log("getting data3...")
        getData(3,()=>{
            console.log("getting data4...")
            getData(4,()=>{
                console.log("getting data5...")
                getData(5);
            });
        });
    });
})