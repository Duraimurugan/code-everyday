const basket = ['🌴', '🌲', '🌳', '🌰', '🌴', '🌲'];

const getUniqueItems = (array) => array.filter((item, index) => array.indexOf(item) === index);

console.log(getUniqueItems(basket));

// [ '🌴', '🌲', '🌳', '🌰' ] 