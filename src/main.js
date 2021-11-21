const SHA256=require('crypto-js/sha256')

class Block{
    constructor(index, timestamp, data, previousHash=""){
        this.index=index;
        this.timestamp=new Date();
        this.data=data;
        this.previousHash=previousHash;
        this.hash=this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index+this.previousHash+this.timestamp+JSON.stringify(this.data)).toString();
    }
    date(){
        return new Date();
    }
}

class Blockchain{
    constructor(){
        this.chain=[this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0, "01/01/2021", "Genesis Block", "0");
    }

    getLatestBlock(){
        return (this.chain[this.chain.length-1]);
    }

    addBlock(newBlock){
        newBlock.previousHash=this.getLatestBlock().hash;
        newBlock.hash=newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(){
        for(let i=1;i<this.chain.length; i++){
            const currentBlock=this.chain[i];
            const previousBlock=this.chain[i-1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        
        return true;
    }

}

let invoiceBlockchain= new Blockchain();
invoiceBlockchain.addBlock(new Block(1, "", {InvoiceID: "ASEX-2345-SEDR"}));
invoiceBlockchain.addBlock(new Block(2, "", {InvoiceID: "SWQT-7242-IREW"}));


console.log(JSON.stringify(invoiceBlockchain, null, 4));
console.log("Is blockchain valid?", invoiceBlockchain.isChainValid());

invoiceBlockchain.chain[1].data= {InvoiceID: "ASEX-2345-WEDR"};

console.log(JSON.stringify(invoiceBlockchain, null, 4));
console.log("Is blockchain valid?", invoiceBlockchain.isChainValid());