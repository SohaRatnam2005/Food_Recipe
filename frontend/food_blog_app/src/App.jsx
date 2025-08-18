import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import axios from 'axios'
import  AddFoodRecipe  from './pages/AddfoodRecipe'
import EditRecipe from './pages/EditRecipe'
import RecipeDetails from './pages/RecipeDetails'
import About from './pages/About'


const getAllRecipes=async()=>{
  let allRecipes=[]
  await axios.get("https://food-recipe-backend-0vgx.onrender.com/recipe").then(res=>{
    allRecipes=res.data
  })
  return allRecipes
}

const getMyRecipes = async () => {
  try {
    const storedUser = localStorage.getItem("user")
    if (!storedUser) return []
    const user = JSON.parse(storedUser)
    
    const res = await axios.get(`https://food-recipe-backend-0vgx.onrender.com/recipe?createdBy=${user._id}`)
    return res.data || []
  } catch (err) {
    console.error("Error fetching my recipes:", err)
    return []
  }
}


const getFavRecipes=()=>{
  return JSON.parse(localStorage.getItem("fav"))
}

const getRecipe=async({params})=>{
  let recipe;
  await axios.get(`https://food-recipe-backend-0vgx.onrender.com/recipe/${params.id}`)
  .then(res=>recipe=res.data)

  await axios.get(`https://food-recipe-backend-0vgx.onrender.com/user/${recipe.createdBy}`)
  .then(res=>{
    recipe={...recipe,email:res.data.email}
  })

  return recipe
}

const router=createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<Home/>,loader:getAllRecipes},
    {path:"/myRecipe",element:<Home/>,loader:getMyRecipes},
    {path:"/favRecipe",element:<Home/>,loader:getFavRecipes},
    {path:"/addRecipe",element:<AddFoodRecipe/>},
    {path:"/editRecipe/:id",element:<EditRecipe/>},
    {path:"/recipe/:id",element:<RecipeDetails/>,loader:getRecipe},
    { path: "/about", element: <About /> }
  ]}
 
])

export default function App() {
  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  )
}
