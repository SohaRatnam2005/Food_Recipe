import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({})
    const navigate = useNavigate()

    const onHandleChange = (e) => {
        let value;
        if (e.target.name === "ingredients") {
            value = e.target.value.split(","); // convert comma-separated to array
        } else if (e.target.name === "file") {
            value = e.target.files[0]; // single file
        } else {
            value = e.target.value;
        }
        setRecipeData(prev => ({ ...prev, [e.target.name]: value }));
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData
        const formData = new FormData();
        for (const key in recipeData) {
            if (Array.isArray(recipeData[key])) {
                recipeData[key].forEach(item => formData.append(key, item));
            } else {
                formData.append(key, recipeData[key]);
            }
        }

        try {
            await axios.post("https://food-recipe-backend-0vgx.onrender.com/recipe", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': 'bearer ' + localStorage.getItem("token")
                }
            });
            navigate("/");
        } catch (error) {
            console.error("Error adding recipe:", error);
        }
    }

    return (
        <>
            <div className='container'>
                <form className='form' onSubmit={onHandleSubmit}>
                    <div className='form-control'>
                        <label>Title</label>
                        <input type="text" style={{ 'background-color': '#effff8' }} className='input' name="title" onChange={onHandleChange}></input>
                    </div>
                    <div className='form-control'>
                        <label>Time</label>
                        <input type="text" style={{ 'background-color': '#effff8' }} className='input' name="time" onChange={onHandleChange}></input>
                    </div>
                    <div className='form-control'>
                        <label>Ingredients</label>
                        <textarea type="text" className='input-textarea' name="ingredients" rows="5" onChange={onHandleChange}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Instructions</label>
                        <textarea type="text" className='input-textarea' name="instructions" rows="5" onChange={onHandleChange}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Recipe Image</label>
                        <input type="file" className='h-full w-full' name="file" onChange={onHandleChange}></input>
                    </div>
                    <button type="submit">Add Recipe</button>
                </form>
            </div>
        </>
    )
}
