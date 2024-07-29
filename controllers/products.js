const uuid = require('uuid').v4;

const MOCK_PRODUCTS=[
    {
        id: 1,
        name: 'Alex',
        comunne: 'Macul'
    },
    {
        id: 2,
        name: 'Patricio',
        comunne: 'Ñuñoa'
    },
    {
        id: 3,
        name: 'Marcelo',
        comunne: 'Maipú'
    }
]

const getAllProducts = (req, res) => {
    res.json({
        status: 'success',
        data:{
            products: MOCK_PRODUCTS
        }
    });
}

const getProductByID = (req, res) => {
    console.log(req.params);
    const {id} = req.params;
    const Product = MOCK_PRODUCTS.find((Product) => Product.id === id);
    console.log(Product);
    if(!Product) {
        return res.status(404).json({
            status: 'error',
            message: 'Product not found, try with another ID'
        })
    }
    return res.status(200).json({
        status: 'success',
        data: {
            Product: Product
        }
    })
}



const saveProduct = (req, res) => {
    const body = req.body;
    const newProduct={
        id: uuid(),
        name: body.name,
        comunne: body.comunne
    }

    MOCK_PRODUCTS.push(newProduct);
    res.status(201).json({
        status: 'success',
        data: {
            product: newProduct
        }
    })

}

const deleteProduct = (req, res) => {
    console.log(req.params);
    const {id} = req.params;
    const ProductIndex = MOCK_PRODUCTS.findIndex((Product) => Product.id === id);
    if(ProductIndex === -1) {
        return res.status(404).json({
            status: 'error',
            message: 'Product not found, try with another ID'
        })
    }
    MOCK_PRODUCTS.splice(ProductIndex, 1);
    return res.status(200).json({
        status: 'success',
        data: {
            Product: MOCK_PRODUCTS
        }
    })
}

const updateProduct = (req, res) => {
    console.log(req.params);
    const {id} = req.params;
    const ProductIndex = MOCK_PRODUCTS.findIndex((Product) => Product.id === id);
    if(ProductIndex === -1) {
        return res.status(404).json({
            status: 'error',
            message: 'Product not found, try with another ID'
        })
    }

    MOCK_PRODUCTS[ProductIndex] = {
        ...MOCK_PRODUCTS[ProductIndex], ...req.body
    };
    res.status(200).json({
        status: 'success',
        data: {
            Product: MOCK_PRODUCTS[ProductIndex]
        }
    })
}

module.exports = {
    getAllProducts,
    getProductByID,
    saveProduct,
    deleteProduct,
    updateProduct
}