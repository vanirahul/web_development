console.log('person1:shows ticket');
console.log('person2:shows ticket');

const preMovie = async () => {

    const promisewifebringingTickets = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'),3000);
    });

     //let ticket
    // try{
    //     ticket=await promisewifebringingTickets;
    // } catch(e){
    //     ticket='sad face';
    // }

const getPopcorn= new Promise((resolve,reject) => resolve(`popcorn`));

const addButter = new Promise((resolve,reject) => resolve(`butter`));

const getColddrinnks= new Promise((resolve,reject) => resolve(`colddrinks`));
   
let ticket =await promisewifebringingTickets;

  let[popcorn,butter,colddrinks]= await Promise.all([getPopcorn,addButter,getColddrinnks])
   
  console.log(`${popcorn} .${butter},${colddrinks}`);
  
  return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');