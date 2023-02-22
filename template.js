const Name = 'tareq';
const age = 31;
const job = 'doctor';

// const sentence = 'Amar naam '+ Name + '\n Amar boyos '+ age + '\n ami '+job;

// backtick use করে সহজে templating করা যায়। উপরের কোডকে সহজে নিচের কোডের মত লেখা যায়। 

const sentence = `Amar Naam ${Name} 
amar boyos ${age} 
ami ${job}
`

console.log(sentence)