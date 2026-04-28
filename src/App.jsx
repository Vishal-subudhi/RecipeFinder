import SearchBar from './components/searchBar'
import SearchResult from './components/searchResult'
import Footer from './components/footer'
import Navbar from './components/Navbar.jsx'
import {useState} from 'react'
import SkeletonCard from './components/skeletonCard.jsx'

function App() {
  const [query, setQuery]=useState("")
  const [recipes, setRecipes]=useState([])
  const [loading, setLoading]=useState(false)
  const [error, setError]=useState(null)
  const [hasSearched, setHasSearched]=useState(false)
  const [currentPage, setCurrentPage]=useState(1)
  const recipesPerPage=6

  const indexOfLast= currentPage*recipesPerPage
  const indexOfFirst= indexOfLast-recipesPerPage
  const currentRecipes= recipes.slice(indexOfFirst, indexOfLast)
  const totalPages= Math.ceil(recipes.length/recipesPerPage)

  const fetchRecipes=async()=>{
    if(query.trim()==="" )return
    setHasSearched(true)
    setLoading(true)
    setError(null)
    setCurrentPage(1)
    try{
      const response=await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=12&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
      )
      const data=await response.json()
      setRecipes(data.results)
    }catch(err){
      setError("Something went wrong.Plese try again later.")
    }finally{
      setLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <div>
      <Navbar brand="Recipe Finder" links="#"/>
      </div>
      <main className="flex-1">
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchRecipes} />
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto p-6">
          {Array.from({length:12}).map((_,i)=>(
            <SkeletonCard key={i}/>
          ))}
        </div>
      )}
      {error && (
        <p className="text-center text-red-500 mt-8 text-lg">{error}</p>
      )}
      {!loading && !error && hasSearched && recipes.length===0 && (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <span className="text-6xl">😞</span>
          <h2 className="text-2xl font-bold text-purple-700">Sorry..! No Recipes Found !! </h2>
          <p className="text-gray-400 text-center max-w-md">Try searching for something else.</p>
        </div>
      )
        }
      {!loading && !error && recipes.length>0 &&<SearchResult recipes={currentRecipes}/>}
      {!loading && recipes.length>0 && (
        <div className="flex justify-center gap-2 mt-8 mb-8">
          <button
            onClick ={()=> setCurrentPage(p=>p-1)}
            disabled={currentPage===1}
            className="px-4 py-2 bg-purple-800 text-white rounded-lg disabled:opacity-50">
              Previous
            </button>
            <span className="px-4 py-2 text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
            onClick={()=> setCurrentPage(p=>p+1)}
            disabled={currentPage===totalPages}
            className="px-4 py-2 bg-purple-800 text-white rounded-lg disabled:opacity-50">
              Next
            </button>
        </div>
      )}
      {!hasSearched &&(
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <span className="text-6xl">🍳</span>
          <h2 className="text-2xl font-bold text-purple-700">Find Your Perfect Recipe</h2>
          <p className="text-gray-400 text-center max-w-md">
            Search For any dish, ingrdiants or Cuisine.<br/>
            We'll find the best recipes for you...!!!
          </p>
        </div>
      )}
      </main>
      <Footer/>
    </div>
  )
}

export default App
