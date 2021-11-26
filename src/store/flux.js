const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUser: ["admin"],
			table: ["1"],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getFavoritesList: () => {
				const store = getStore();
				store.favorite = [] ? "No has agregado favoritos aún" : store.favorite
			},

			addTable: () => {
				const store = getStore();
				setStore({ favorite: store.table.concat() });
			},
			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
