
 for(var counter = 1;counter <=105;counter ++){

    if(counter%3 === 0 && counter%5 === 0){
        console.log("fizbuzz");
    }else if(counter%5 === 0){
        console.log("buzz");
    }else if(counter%3 === 0){
        console.log("fizz");
    }else if(counter%3 === 0 && counter%5 === 0 && counter%7 === 0){
        console.log("fizzbuzzbang");
    }else if(counter%7 === 0){
        console.log("bang");
    }else{
        console.log(counter);
    }
        
}
