
    var acct1 = web3.eth.accounts[0];
    var acct2 = web3.eth.accounts[1];
    var acct3 = web3.eth.accounts[2];
    var acct4 = web3.eth.accounts[3];
    var acct5 = web3.eth.accounts[4];
    

    function getBal(address) {return web3.fromWei(web3.eth.getBalance(address), 'ether').toString()}   

    function sendEth(from, to, value) {web3.eth.sendTransaction({from: from,to: to,value: web3.toWei(value, 'ether')});}

    function convert(uint256 n) returns (bytes32) {return bytes32(n);}