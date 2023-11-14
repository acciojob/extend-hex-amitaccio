const extendHex = (shortHex) => {
  // write your code here
	if(shortHex.charAt(0)=="#"){
		let result = "#";
	for(let i=1; i<shortHex.length; i++){
		result = result + shortHex.charAt(i) + shortHex.charAt(i);
	}
		return result;
	}
	else if(shortHex.charAt(0)!="#"){
		let result2 = "#";
		for(let i=0; i<shortHex.length; i++){
		result2 = result2 + shortHex.charAt(i) + shortHex.charAt(i);
	}
		return result2;
	}
	else if('A'<=shortHex.charAt(0)<='Z'){
		shortHex.toUpperCase();
		let result3 = "#";
		for(let i=0; i<shortHex.length; i++){
		result3 = result3 + shortHex.charAt(i) + shortHex.charAt(i);
	}
		return result3;
	}
};

// Do not change the code below.hhg
   // const shortHex = prompt("Enter Short Hex.");
   // alert(extendHex(shortHex));
