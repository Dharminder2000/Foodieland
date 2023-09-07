import React from 'react'
import breakfast from '../Assets/breakfast.png'
import chocolate from '../Assets/chocolate.png'
import dessert from '../Assets/dessert.png'
import lunch from '../Assets/lunch.png'
import meat from '../Assets/meat.png'
import vegan from '../Assets/vegan.png'
const Categories = () => {
  return (
    <div className='maincategories'>
        <div className='categories'>
        <h1>Categories</h1>
        <button><b>View All Categories</b></button>
        </div>
        <div className='catImg'>
            <div className='Img1'>
            {/* background-image: linear-gradient(to top, lightgreen, white); */}
                <img src={breakfast} alt=''/>
                <p>Breakfast</p>
            </div>
            <div className='Img2'>
                <img src={vegan} alt=''/>
                <p>Vegan</p>
            </div>
            <div className='Img3'>
                <img src={meat} alt=''/>
                <p>Meat</p>
            </div>
            <div className='Img4'>
                <img src={dessert} alt=''/>
                <p>Dessert</p>
            </div>
            <div className='Img5'>
                <img src={lunch} alt=''/>
                <p>Lunch</p>
            </div>
            <div className='Img6'>
                <img src={chocolate} alt=''/>
                <p>Chocolate</p>
            </div>
        </div>
    </div>
  )
}

export default Categories