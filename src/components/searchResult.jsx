import RecipeCard from "./recipeCard";

function SearchResult({recipes}){

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recipes.map(recipe=>(
                <RecipeCard
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                />
            ))}
        </div>
    )
}
export default SearchResult;