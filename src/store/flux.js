const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			path: 'http://127.0.0.1:5000',
			error: null,
			email: null,
			password: null,
			isAuthenticated: false,
			currentUser: null,
			currentUser: ["admin"],
			table: ["1", "2", "3", "4"],
			users: [
				{
					username: "redgar",
					email: "rinconaedgar@gmail.com",
					first_name: "Edgar",
					last_name: "Rincón",
					isActive: true,
					isStaff: true
				},
				{
					username: "ejemplo1",
					email: "ejemplo@gmail.com",
					first_name: "Ejemplo",
					last_name: "Rincón",
					isActive: true,
					isStaff: false
				},],
			products: [
				{
					productImg: "../img/bk-agua.png",
					productName: "Agua (1L)",
					productPrice: "$ 1.000",
					productCategory: "Bebidas",
					isAvailable: true,
				},
				{
					productImg: "../img/img-american-burger.jpg",
					productName: "Hamburguesa Americana",
					productPrice: "$ 4.500",
					productCategory: "Hamburguesas",
					isAvailable: true,
				}, {
					productImg: "../img/pizza-margarita.jpg",
					productName: "Pizza Margarita",
					productPrice: "$ 6.000",
					productCategory: "Pizzas",
					isAvailable: false,
				},

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getFavoritesList: () => {
				const store = getStore();
				store.favorite = [] ? "No has agregado favoritos aún" : store.favorite
			},

			addTable: (table) => {
				const store = getStore();
				setStore(store.table.concat(table));
			},

			login: (formData) => {
                const store = getStore();
                fetch(store.path + '/login/', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                })
                    .then (resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                email: null,
                                password: null,
                                error: null,
                                role: null
                            })
                        }
                    })
            },

			loadCharacters: () => {
				fetch(process.env.REACT_APP_API_URL + "/profile/api/v1/users/").then((data) => {
					return data.json();
				}).then((res) => {
					setStore({ people: res.results })
				})
			},

			handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
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
