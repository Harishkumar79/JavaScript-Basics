let items = [485 , 55 , 783 , 445 , 500];

for(let i = 0 ; i<items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);