const initialValue = {
	cart: []
};

const cartReducer = ( state = initialValue, { data, type } ) => {
	switch (type) {
		case 'addCart': {
			const itemList = state.cart.map(item => item.id);
			const flag = itemList.indexOf(data.id);
			if (flag === -1) {
				state.cart = state.cart.concat({...data, count: 1});
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
		default: {
			return state;
		}
	}
};

export default cartReducer;