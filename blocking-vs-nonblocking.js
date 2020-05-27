console.clear();
//blocking (sync)
const sayHi = name => console.log(`Hello, ${name}`);
sayHi("Ben");
sayHi("Dan");
sayHi("Wade");

//non blcoking (async)

setTimeout(sayHi,2500,'George');
setTimeout(sayHi,1500,'Cory');

// callback
const farewell = name => console.log(`Goodbye, ${name}`);
const greeting = (name, callback)=>{
    console.log(`Hi, ${name}`);
    callback(name);
}
//call greeting and pass farewell as an argument
greeting('Ben Hoople', farewell);
greeting('Rocky Hoople',sayHi);