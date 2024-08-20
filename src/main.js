const Block = require('./block');
const Blockchain = require('./blockchain');

let myBlockchain = new Blockchain();
myBlockchain.addBlock(new Block(1,"20/09/24", {amout:4}));
myBlockchain.addBlock(new Block(2,"21/09/24", {amout:1}));
myBlockchain.addBlock(new Block(3,"22/09/24", {amout:100}));
myBlockchain.addBlock(new Block(4,"23/09/24", {amout:5}));
myBlockchain.addBlock(new Block(5,"24/09/24", {amout:3}));
myBlockchain.addBlock(new Block(6,"25/09/24", {amout:7}));

console.log(JSON.stringify(myBlockchain, null, 4));
console.log('Is Blockchain valid?',myBlockchain.isChainValid());