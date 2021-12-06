const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			path: 'https://desolate-ridge-14789.herokuapp.com',
            currentUser: null,
			error: null,
			email: null,
			password: null,
			confirmedPassword: null,
			isAuthenticated: false,
			currentUser: null,
			token: null,
			first_name: null,
			last_name: null,
			rut: null,
			address: null,
			city: null,
			dob: null,
			productName: null,
			productPrice: null,
			productCategory: null,
			productImg: null,
			productDescription: null,
			is_active: null,
            is_admin: null,
			table: ["1", "2", "3", "4"],
			users: [],
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

			addTable: (table) => {
				const store = getStore();
				setStore(store.table.concat(table));
			},

            getUsers: () => {
                const store = getStore();
                fetch(store.path + '/profile/api/v1/users/', {
                    method: 'GET',
					headers: {"Content-Type": "application/json"},                })
                    .then (resp => resp.json())
                    .then (data => {
                        
                            setStore({ users: data.users
                            })
                        
                    })
            },

			login: async (formData) => {
                const store = getStore();
                await fetch(store.path + '/api/login', {
                    method: 'POST',
					headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(formData),
                })
                    .then (resp => resp.json())
                    .then (data => {
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
			
			register_client: async (formData) => {
                const store = getStore();
                if(store.password !== store.confirmedPassword){
                    setStore({
                        error: "Contraseñas no son iguales"
                    })
                    return;
                }
                if(!store.name || !store.last_name || !store.email || !store.rut || !store.address || !store.dob || !store.city){
                    setStore({
                        error: "Debe completar todos los campos"
                    })
                    return;
                }
				
                await fetch(store.path + '/profile/api/v1/users/', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(formData),
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data.msg
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                email: null,
                                password: null,
                                error: null,
                            })
                        }
                    })
            },

			addProduct: async (e) => {
                e.preventDefault();
                const store = getStore();
                if(!store.productName || !store.productPrice || !store.productCategory || !store.productDescription){
                    setStore({
                        error: "Debe completar todos los campos"
                    })
                    return;
                }

                let formData = new FormData()
                formData.append('productName', store.productName)
                formData.append('productPrice', store.productPrice)
                formData.append('productCategory', store.productCategory)
                formData.append('productDescription', store.productDescription)
				formData.append('isAvailable', store.isAvailable)

                await fetch(store.path + '/add-product', {
                    method: 'POST',
                    body: formData
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data.msg
                            })
                        } else {
                            setStore({
                                productName: null,
                                isAvailable: null,
                                productPrice: null,
								productCategory: null,
                                productDescription: null,
                                error: null,
                            })
                        }
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
