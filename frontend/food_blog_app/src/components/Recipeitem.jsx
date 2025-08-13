import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import foodImg from '../assets/foodRecipe.png'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

export default function RecipeItems() {
    const recipes = useLoaderData()
    const [allRecipes, setAllRecipes] = useState()
    const [favItems, setFavItems] = useState(JSON.parse(localStorage.getItem("fav")) ?? [])
    let path = window.location.pathname === "/myRecipe" ? true : false
    const navigate = useNavigate()
    
    console.log(allRecipes)
    
    useEffect(() => {
        setAllRecipes(recipes)
    }, [recipes])
    
    const onDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/recipe/${id}`)
            setAllRecipes(recipes => recipes.filter(recipe => recipe._id !== id))
            const updatedFavItems = favItems.filter(recipe => recipe._id !== id)
            setFavItems(updatedFavItems)
            localStorage.setItem("fav", JSON.stringify(updatedFavItems))
        } catch (error) {
            console.error("Error deleting recipe:", error)
        }
    }
    
    const favRecipe = (item) => {
        const isAlreadyFav = favItems.some(recipe => recipe._id === item._id)
        let updatedFavItems
        
        if (isAlreadyFav) {
            // Remove from favorites
            updatedFavItems = favItems.filter(recipe => recipe._id !== item._id)
        } else {
            // Add to favorites
            updatedFavItems = [...favItems, item]
        }
        
        setFavItems(updatedFavItems)
        localStorage.setItem("fav", JSON.stringify(updatedFavItems))
    }
    
    return (
        <>
            <div className='card-container'>
                {
                    allRecipes?.map((item, index) => {
                        return (
                            <div key={index} className='recipe-card' onDoubleClick={() => navigate(`/recipe/${item._id}`)}>
                                <div className='recipe-image-container'>
                                    <img 
                                        src={`http://localhost:5000/images/${item.coverImage}`} 
                                        alt={item.title}
                                        className='recipe-image'
                                    />
                                </div>
                                <div className='recipe-card-body'>
                                    <div className='recipe-title'>{item.title}</div>
                                    <div className='recipe-icons'>
                                        <div className='recipe-timer'>
                                            <BsStopwatchFill />{item.time}
                                        </div>
                                        {(!path) ? 
                                            <FaHeart 
                                                onClick={() => favRecipe(item)}
                                                className='heart-icon'
                                                style={{ color: (favItems.some(res => res._id === item._id)) ? "red" : "" }} 
                                            /> :
                                            <div className='recipe-actions'>
                                                <Link to={`/editRecipe/${item._id}`} className="edit-icon">
                                                    <FaEdit />
                                                </Link>
                                                <MdDelete 
                                                    onClick={() => onDelete(item._id)} 
                                                    className='delete-icon' 
                                                />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            

        
            
            <style jsx>{`
                /* Recipe Card Styles */
.recipe-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    cursor: pointer;
    height: 200px; /* Fixed height for consistent card sizes */
    background: white;
}

.recipe-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.recipe-image-container {
    height: 120px; /* Fixed height for image container */
    overflow: hidden;
    flex-shrink: 0; /* Prevent shrinking */
}

.recipe-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* This ensures images maintain aspect ratio and fill the container */
    object-position: center;
}

.recipe-card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px;
    flex-grow: 1; /* Takes remaining space */
    height: 80px; /* Fixed height for card body */
}

.recipe-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limit to 2 lines */
    -webkit-box-orient: vertical;
    line-height: 1.4;
    height: 2.8em; /* Fixed height for title (2 lines) */
    color: #333;
}

.recipe-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto; /* Push to bottom */
}

.recipe-timer {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    color: #666;
}

.heart-icon {
    cursor: pointer;
    font-size: 18px;
    transition: all 0.2s ease;
    color: #ccc;
}

.heart-icon:hover {
    transform: scale(1.1);
}

.heart-icon[style*="red"] {
    color: red !important;
}

/* Alternative approach - you can also add this class-based approach */
.heart-icon.favorite {
    color: red !important;
}

.recipe-actions {
    display: flex;
    gap: 8px;
    align-items: center;
}

.edit-icon,
.delete-icon {
    cursor: pointer;
    font-size: 18px !important; /* Make icons larger and force the style */
    padding: 6px;
    border-radius: 4px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    min-height: 30px;
}

.edit-icon {
    color: #4CAF50 !important;
    text-decoration: none;
}

.edit-icon:hover {
    background-color: #e8f5e8;
    transform: scale(1.1);
}

.delete-icon {
    color: #f44336 !important; /* Force red color with !important */
    background-color: transparent;
}

.delete-icon:hover {
    background-color: #ffebee;
    transform: scale(1.1);
    color: #d32f2f !important;
}

/* Ensure icons are visible by adding more specific selectors */
.recipe-actions .delete-icon {
    color: #f44336 !important;
    opacity: 1 !important;
    visibility: visible !important;
}

.recipe-actions .edit-icon {
    color: #4CAF50 !important;
    opacity: 1 !important;
    visibility: visible !important;
}
            `}</style>
        </>
    )
}