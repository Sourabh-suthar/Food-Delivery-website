import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../Fooditem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <div className='food-display'>
    <h2>Top Dishes Near You</h2>
    <div className="food-display-list">
           {food_list.map((item,index)=>{
            if(category==="All"|| category===item.category){
                return <FoodItem key={index} id={item._id} image={item.image} name={item.name} description={item.description} price={item.price} />
            }
           })}
    </div>
    </div>
  )
}

export default FoodDisplay