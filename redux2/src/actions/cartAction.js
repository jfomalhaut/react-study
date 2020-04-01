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

const onCheck = id => {
	return {
		type: 'onCheck',
		data: id
	};
};

const checkAll = () => {
	return {
		type: 'checkAll'
	};
};

const removeCheck = () => {
	return {
		type: 'removeCheck'
	};
};

export default {
	addCart,
	onCheck,
	checkAll,
	removeCheck,
	removeCart,
	removeAllCart	
};