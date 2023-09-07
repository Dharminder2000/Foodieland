import React from 'react'
import salad from '../Assets/salad.png';
import mix from '../Assets/mix.png';
import meatballs from '../Assets/meatballs.png';
import pancake from '../Assets/pancake.png';
import salmon from '../Assets/salmon.png';
import orangePan from '../Assets/orangePan.png';
import potChicken from '../Assets/potChicken.png';
import baconPasta from '../Assets/baconPasta.png';
import cheeseBurger from '../Assets/cheeseBurger.png';
const recipePart = () => {
  return (
    
      <div className="recipe">
        <div className="recipetitle">
            <h1>Simple and tasty recipes</h1>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
            <div className="recipeCards">
            <div className='card'>
                <img src={cheeseBurger} alt="salad" />
                <p className='card_name'>
                Big and Juicy Wagyu Beef Cheeseburger
                </p>
                

            </div>
            <div className='card'>
                <img src={salmon} alt="salad" />
                <p className='card_name'>
                Fresh Lime Roasted Salmon with Ginger Sauce
                </p>
                

            </div>
            <div className='card'>
                <img src={pancake} alt="salad" />
                <p className='card_name'>
                Strawberry Oatmeal Pancake with Honey Syrup
                </p>
                

            </div>
            <div className='card'>
                <img src={salad} alt="salad" />
                <p className='card_name'>
                Fresh and Healthy Mixed Mayonnaise Salad
                </p>
                

            </div>
            <div className='card'>
                <img src={meatballs} alt="salad" />
                <p className='card_name'>
                Chicken Meatballs with Cream Cheese
                </p>
                

            </div>
            <div className='card'>
                <img src={mix} alt="salad" />
                <p className='card_name'>
                Don’t forget to eat healthy food
                </p>
                

            </div>
            <div className='card'>
                <img src={orangePan} alt="salad" />
                <p className='card_name'>
                Fruity Pancake with Orange & Blueberry
                </p>
                

            </div>
            <div className='card'>
                <img src={potChicken} alt="salad" />
                <p className='card_name'>
                The Best Easy One Pot Chicken and Rice
                </p>
                

            </div>
            <div className='card'>
                <img src={baconPasta} alt="salad" />
                <p className='card_name'>
                The Creamiest Creamy Chicken and Bacon Pasta
                </p>
                

            </div>
        </div>
        </div>
      </div>

  )
}

export default recipePart
