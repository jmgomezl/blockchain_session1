const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const Block = require('./block');

const app = express();
const port = 3000;

const myBlockchain = new Blockchain();

app.use(bodyParser.json());

// api to obtain the whole chain

app.get('/chain', (req, res) => {
    res.json(myBlockchain.chain);
});

// api to obtain the number of blocks in the chain
app.get('/chain/length', (req, res) => {
    res.json(myBlockchain.chain.length);
});

// api to add a new block to the chain
app.post('/addBlock', (req, res) => {
    const newBlock = new Block (
        myBlockchain.chain.length,
        new Date().toISOString(),
        req.body.data
    )
    myBlockchain.addBlock(newBlock);
    res.json(myBlockchain.chain);

});

// api to get a specific block by index
app.get('/getBlock/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const block = myBlockchain.chain[index];

    if (block) {
        res.json(block);
    } else {
        res.status(404).json({ message: 'Block not found' });
    }
});
            
// api to check if a block is valid
            
app.get('/is-valid', (req, res) => {            
    const isValid = myBlockchain.isValid();
    res.json(isValid);
});
                
// api to check if a block is valid
app.get('/is-valid/:index', (req, res) => {
    const index = req.params.index;
    const isValid = myBlockchain.isValid(index);
    res.json(isValid);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
