const displayMessage = (message) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (message);
        },3000);
    });
}

const myFunction = async()=>{
    try {
        let result = '';
        result = await displayMessage('hello');
        console.log(result);
        result = await displayMessage('there?');
        console.log(result);
        result = await displayMessage('hello?');
        console.log(result);
    }catch(error){
        console.log('error',error);
    }
}
    myFunction();
