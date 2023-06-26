import express from "express";
import { PRODUCTS } from "./mock/products.mock";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log("Server is running");
    }
);


app.get("/api/products", (req, res) => {
    const productOneImage = PRODUCTS.map(product => {
        const oneImageArray = product.img.slice(0, 1);
        return {...product, img: oneImageArray};
    });
    return res.status(200).json({products: productOneImage});
}
);

app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({message: "Product ID is required"});
    if (isNaN(parseInt(id, 10))) return res.status(400).json({message: "Product ID must be a number"});
    if (parseInt(id, 10) < 1) return res.status(400).json({message: "Product ID must be a positive number"});
    const product = PRODUCTS.find(product => product.id === parseInt(id, 10));
    if (!product) return res.status(404).json({message: "Product not found"});
    return res.status(200).json({product});
}
);
