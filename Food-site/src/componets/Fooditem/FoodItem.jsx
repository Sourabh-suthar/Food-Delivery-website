import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const FoodItem = ({id, name, price, description, image }) => {
    const {CartItems,addToCart,removeFromCart} = useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className="food-item-img-contanier">
                <img className='food-item-image' src={image} />
                {!CartItems[id]
                  ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                  : <div className='food-item-counter' >
                     <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                     <p>{CartItems[id]}</p>
                     <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                  </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price"> <p><CurrencyRupeeIcon/></p>{price}</p>
            </div>
        </div>
    )
}

export default FoodItem