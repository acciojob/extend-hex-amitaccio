const extendHex = (shortHex) => {
  // write your code here
	let result ="#";
	for(let i=0; i<shortHex.length; i++){
		result = result + shortHex.charAt(i) + shortHex.charAt(i);
	}
	return result;
};

// Do not change the code below.hh
 const shortHex = prompt("Enter Short Hex.");
 alert(extendHex(shortHex));
