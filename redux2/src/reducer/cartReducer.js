const initialValue = {
	cart: []
};

const cartReducer = ( state = initialValue, { data, type } ) => {
	switch (type) {
		case 'addCart': {
			const itemList = state.cart.map(item => item.id);
			const flag = itemList.indexOf(data.id);
			if (flag === -1) {
				state.cart = state.cart.concat({...data, count: 1, check: false});
			} else {
				state.cart = state.cart.map((item, index) => {
					if (index === flag) {
						return { ...item, count: (item.count + 1) };
					} else{
						return item;
					}
				});
			}
			return {
				...state
			};
		}

		case 'removeCart': {
			state.cart = state.cart.filter(item => {
				return item.id !== data;
			});
			return {
				...state
			};
		}
		
		case 'removeAllCart': {
			state.cart = [];
			return {
				...state
			};
		}

		case 'onCheck': {
			state.cart = state.cart.map(item => {
				if (item.id === data) {
					return ({ ...item, check: !item.check});
				} else {
					return item;
				}
			});
			return { 
				...state 
			}
		}

		case 'checkAll': {
			const flag = state.cart.some(item => item.check === false);
			state.cart = state.cart.map(item => ({...item, check: flag}));
			return {
				...state 
			}
		}

		case 'removeCheck': {
			state.cart = state.cart.filter(item => !item.check);
			return {
				...state
			}
		}

		default: {
			return state;
		}
	}
};

export default cartReducer;