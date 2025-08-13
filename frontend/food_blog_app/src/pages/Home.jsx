import React from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import Navbar from '../components/navbar' 
import Footer from '../components/footer'
import Recipeitem from '../components/Recipeitem'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate=useNavigate()
  
  return (
    <>
       <section className='home'>
                <div className='left'>
                    <h1 className='text-4xl font-bold'>Food Recipe</h1>
                    <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h5>
                    <button onClick={()=>navigate("/addRecipe")}>Share your recipe</button>
                    </div>

                <div className="right">
                <img src={foodRecipe} className='w-{320px} h-{300px}'></img>
                </div>
                
                  </section>
                  <div className="bg">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,32L40,42.7C80,53,160,75,240,122.7C320,171,400,245,480,245.3C560,245,640,171,720,122.7C800,75,880,53,960,74.7C1040,96,1120,160,1200,192C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>                  </div>
   <div className='recipe'>
    <Recipeitem/>
   </div>
    </>
  )
}
