import React from 'react';
import {TextContent} from '../styles';

const ProductItem = ({text}) => {
    const renderTodo = () => {
        return (
            <TextContent>
                <img alt='' src={text?.image_url}/>
                <div>
                    <p>{text?.name}</p>
                    <p>Cashback: $ {text?.cash_back}</p>
                </div>
            </TextContent>
        )
    }
    return (
        <>
            {renderTodo(text)}
        </>
    )
}
export default ProductItem
