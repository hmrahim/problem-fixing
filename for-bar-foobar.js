for (let i = 1; i <= 50; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fobar");
        
    } else if (i % 3 == 0) {
        console.log("fo");
    }
    else if (i % 5 == 0) {
        console.log("bar");
    }
    else {
        console.log(i);
    }
   
}