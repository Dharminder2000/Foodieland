import React from 'react'
import vegSalad from '../Assets/vegSalad.png';
import beef from '../Assets/beef.png';
import friedRice from '../Assets/friedRice.png';
import tacoMeat from '../Assets/tacoMeat.png';
import rainbowChicken from '../Assets/rainbowChicken.png';
import sandwich from '../Assets/sandwich.png';
import veganLutse from '../Assets/veganLutse.png';
import chickenSoup from '../Assets/chickenSoup.png';
// import cheeseBurger from '../Assets/cheeseBurger.png';
const Endpart = () => {
  return (
    
      <div className="recipe1">
        <div className="recipetitle1">
            <h1>Try this delicious recipe to make your day</h1>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
            </div>           <div className="recipeCards1">
            <div className='card1'>
                <img src={vegSalad} alt="salad" />
                <p className='card_name1'>
                Mixed Tropical Fruit Salad with Superfood Boosts 
                </p>
                

            </div>
            <div className='card1'>
                <img src={beef} alt="salad" />
                <p className='card_name1'>
                Big and Juicy Wagyu Beef Cheeseburger
                </p>
                

            </div>
            <div className='card1'>
                <img src={friedRice} alt="salad" />
                <p className='card_name1'>
                Healthy Japanese Fried Rice with Asparagus
                </p>
                

            </div>
            <div className='card1'>
                <img src={tacoMeat} alt="salad" />
                <p className='card_name1'>
                Cauliflower Walnut Vegetarian Taco Meat
                </p>
                

            </div>
            <div className='card1'>
                <img src={rainbowChicken} alt="salad" />
                <p className='card_name1'>
                Rainbow Chicken Salad with Almond Honey Mustard Dressing.
                </p>
                

            </div>
            <div className='card1'>
                <img src={sandwich} alt="salad" />
                <p className='card_name1'>
                Barbeque Spicy Sandwiches with Chips 
                </p>
                

            </div>
            <div className='card1'>
                <img src={veganLutse} alt="salad" />
                <p className='card_name1'>
                Firecracker Vegan Lettuce Wraps - Spicy! 
                </p>
                

            </div>
            <div className='card1'>
                <img src={chickenSoup} alt="salad" />
                <p className='card_name1'>
                Chicken Ramen Soup with Mushroom 
                </p>
                

            </div>
            
        </div>
        </div>
     

  )
}

export default Endpart
