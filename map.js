const numbers = [2, 8, 4, 5, 9 ,11]

// এখানে একটা array আছে । এই সংক্যাগুলাকে loop করে , ডাবল করে একটা রেজাল্ট বানাব।

const output = []; //result কে এই খালি array এর মধ্যে রাখব। 

for (const number of numbers ){
    const doubled = number * 2; //array এর প্রতিটা number কে ডাবল করা হল। 
    output.push(doubled);  // তারপর output নামে যে খালি  array ছিল সেটাতে push করা হল।
}
console.log(numbers);  //[ 2, 8, 4, 5, 9, 11 ]
console.log(output);  // [ 4, 16, 8, 10, 18, 22 ]

// উপরের সেম কাজটা আমরা ফাংশন দিয়েও করতে পারি। 

function getDoubled(numbers){
    const output = []; 

    for (const number of numbers ){
        const doubled = number * 2; 
        output.push(doubled);  
    }
    return output;
}
const result = getDoubled(numbers)
console.log(result);  // [ 4, 16, 8, 10, 18, 22 ]


/* 
    এখানে ডাবল করার জন্য যে ইকুয়েশন ( number * 2) এটাকে চাইলে আমরা একটা ফাংশনের মধ্যে রাখতে পারি।
    function doubleIt(number){
        return number * 2;
    }
    উপরের ফাংশনটি রেগুলার ফাংশন। আমরা এই সেম ফাংশনটি array function দিয়েও লিখতে পারি।
    const doubleIt = num => num * 2; 
*/


//========== উপরের কাজকে আমরা সহজ ভাবে map দিয়ে করতে পারি। ========
const doubleIt = num => num * 2; 
const makeDouble = numbers.map(doubleIt);

/* এখানে makeDouble একটা ভেরিয়েবল নেয়া হয়েছে তারপর array এর নাম(numbers) তারপর  ডট দিয়ে map লিখে এর মধ্যে কল ব্যাক ফাংশন লেখা হয়েছে। কল্ব্যাক যে ফাংশন 
লিখা হয়েছে সেটার কাজ ভেতরে ভেতরে হয়ে রেজাল্টকে কোনো একটা array এর মধ্যে রেখে  makeDouble variable এর মধ্যে রাখবে।  */
console.log('map result' , makeDouble);

