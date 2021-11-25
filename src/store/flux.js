const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorite: [],
			people: [],
			planets: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getFavoritesList: () => {
				const store = getStore();
				store.favorite = [] ? "No has agregado favoritos aún" : store.favorite
			},

			addFavorites: (characterName) => {
				const store = getStore();
				setStore({ favorite: store.favorite.concat(characterName) });
			},

			loadCharacters: () => {
				fetch("https://swapi.dev/api/people/").then((data) => {
					return data.json();
				}).then((res) => {
					setStore({ people: res.results })
				})
			},

			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/").then((data) => {
					return data.json();
				}).then((res) => {
					setStore({ planets: res.results })
				})
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
