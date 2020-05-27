console.clear();

//callback
const whenIveTimedOut = async string =>{
    new Promise((resolve, reject) =>{
        setTimeout(name =>{
            console.log(`good ${string}`);
            return resolve();
        }, 50);
    })
}
setTimeout(()=>{
    console.log("We timed out!");
    whenIveTimedOut(`shit.`);
},2000); 

//Promises - passes resolve and reject : dicates success of the method
new Promise((resolve, reject)=>{
    setTimeout(name=>{
        console.log(`we timed out`);
        resolve();
    }, 3000)
}).then(() => whenIveTimedOut('stuff.'));

//Async/Await
const asyncFucntion = async () => {
    await new Promise ((resolve, reject)=>{
        setTimeout(name =>{
            console.log(`we timed out asyncly`);
            return resolve();
        }, 5000);
    });
    await whenIveTimedOut('coding');
}

asyncFucntion();