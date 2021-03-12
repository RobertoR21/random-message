const messages = [
    "Roberto",
    "Nicolay",
    "Diego",
    "Laura",
    "Ana",
    "Yessica",
    "Carlina",
    "Rosendo"
]

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random()* messages.length)];
    console.log(message);
}

module.exports = { randomMsg };