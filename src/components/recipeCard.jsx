function RecipeCard({id, title, image}){

    return(
        <div className="flex flex-col gap-4 justify-between items-center border border-green-300 p-2">
            <div>
            <img src={image} alt="Recipe Image" className="border border-gray-200 shadow-md"/>
            </div>
            <h4 className="text-lg font-bold">{title}</h4>
            <a href={`https://spoonacular.com/recipes/${title.toLowerCase().replace(/ /g,"-")}-${id}`}
             target="_blank"
             rel="noopener noreferrer"
             className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 border border-gray-600"
             >
                View Recipe
            </a>
        </div>
    )
}
export default RecipeCard;