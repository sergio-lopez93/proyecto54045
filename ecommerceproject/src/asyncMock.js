const products = [
    {
        id: '1',
        name: 'Harina Pan',
        price: 2,
        category: 'viveres',
        img: 'https://es.allofpan.com/wp-content/uploads/2020/03/harina_pan_1kg_5HH001-1-1.png',
        stock: 30,
        description: 'Harina de maiz precocido'
    },
    { id: '2', name: 'Toddy', price: 6, category: 'bebidas instantaneas', img: 'https://m.media-amazon.com/images/I/61FSlLk6EDL._AC_UF894,1000_QL80_.jpg', stock: 20, description: 'Alimento achocolatado fortificado' },
    { id: '3', name: 'cerelac', price: 4, category: 'bebidas instantaneas', img: 'https://grupoleiros.com/image/leiros/GUCM0953PR01.png', stock: 15, description: 'alimento a base de trigo, enriquecido con 12 vitaminas y 5 minerales' },
    { id: '4', name: 'Mayonesa Mavesa', price: 4, category: 'viveres', img: 'https://bodeguitamarket.com/31-medium_default/mayonesa-mavesa-445g.jpg', stock: 8, description: 'Aderezos para ensaladas' },
    { id: '5', name: 'jabon las llaves', price: 10, category: 'detergentes', img: 'https://lh3.googleusercontent.com/oAJ_XzTQVecvwXV5TXF_EJNh6OWF9oMqhL5wQLGbqnBIxv7GIclhkFGYlS4r-xT1Fm7udFj76FtfPcFkvId8TtRt5Z2Hx94VtDkvNRfzQAidneE', stock: 5, description: 'jabon para lavar' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}