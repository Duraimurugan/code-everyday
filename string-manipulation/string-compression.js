/* input = 'aabbbcc', output = 2a3b2c */

function reducer(str) {
	if(!str.length) {
  	return '';
  }
  let counter = 0;
  let output = '';
 	const strChars = str.split('');
  for(let i=0; i<strChars.length; i++) {
  	counter++;
  	if(strChars[i] !== strChars[i+1]) {
    	output += counter + strChars[i];
      counter = 0;
    }
  }
  return output;
}

console.log(reducer('aabbbcc'));