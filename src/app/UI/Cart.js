import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import './Cart.css';
import Salad from '../../assets/Salad.jpg';

const Cart = () => {
    const menu_array = [
        {
            id:1,
            image: Salad,
            description: 'Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary. Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary',
            text: 'Green Salad with mashed potatoes',
            price: '12.2'
        },
        {
            id:2,
            image: Salad,
            description: 'Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary. Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary',
            text: 'Grilled Steak with Mushroom sauce',
            price: '12.2'
        },
        {
            id:3,
            image: Salad,
            description: 'Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary. Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary',
            text: 'Fresh vegetable salad',
            price: '12.2'
        },
        {
            id:4,
            image: Salad,
            description: 'Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary. Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary',
            text: 'Salad with strawberries and watermelon',
            price: '12.2'
        },
        {
            id:5,
            image: Salad,
            description: 'Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary. Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary',
            text: 'Vegan strawberry cake',
            price: '12.2'
        },
      
    ]
    
    
    const{id} = useParams();
    const product = menu_array.find(item => item.id == id);
    
    return(
        <div className="main_container">
        <h1> hello</h1>
        </div>
    )
}
export default Cart;