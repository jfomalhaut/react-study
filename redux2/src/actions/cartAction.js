const addCart = item => {
	return {
		type: 'addCart',
		data: item
	};
};

const removeCart = item => {
	return {
		type: 'removeCart',
		data: item
	};
};

const removeAllCart = () => {
	return {
		type: 'removeAllCart'
	};
};

export default {
	addCart,
	removeCart,
	removeAllCart	
};