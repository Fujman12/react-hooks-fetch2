import React from 'react';
import {AllItems, ListItem} from '../styles'
import ProductItem from "./ProductItem";

const ProductList = ({ products, deleteProduct }) => {
    return (
        <AllItems>
            {products.map((product, index) => (
                <ListItem key={index}>
                    <ProductItem text={product} item={product} />
                </ListItem>
            ))}
        </AllItems>
    )
}

export default ProductList
