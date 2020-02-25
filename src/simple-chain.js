const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value = value === undefined ? " " : value;
    this.chain.push(`( ${value} )`);
    return chainMaker;
  },

  removeLink(position) {
    if (position-1 in this.chain) {
      this.chain.splice(position-1,1) ;
      return chainMaker;
    }
    else {
      this.chain=[];
      throw new Error();
    }  
  },

  reverseChain() {
    this.chain = (this.chain).reverse();
    return chainMaker;
  },

  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
