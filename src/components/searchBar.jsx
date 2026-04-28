import {useState, useEffect} from 'react'

function SearchBar({query, setQuery, onSearch}){
    const fullText="Whats in Your Mind today !!"
    const [displayText, setDisplayText]= useState("")

    useEffect(()=> {
        let index=0
        let deleting=false

        const timer= setInterval(()=>{
            if(!deleting){
                setDisplayText(fullText.slice(0,index+1))
                index++
                if(index === fullText.length){
                    deleting=true
                    setTimeout(() =>{}, 2000)
                }
            } else {
                setDisplayText(fullText.slice(0, index-1))
                index--
                if(index === 0){
                    deleting=false
                }
            }
        }, 200)
        return () => clearInterval(timer) 
    }, [])
    return(
        <div className="py-10">
            <div className="flex flex-col items-center gap-4">
            <span className="text-6xl font-bold text-purple-400 min-h-[80px] block">
                {displayText}
                <span className="cursor">|</span>
            </span>
            <input 
                type="text" 
                placeholder="Search For Your Recipes.." 
                value={query} 
                onChange={(e)=>setQuery(e.target.value)}
                onKeyDown={(e)=>{
                    if(e.key==="Enter"){
                    onSearch()
                    }
                }}
                required={true}
                className='border rounded-lg px-3 py-2 w-full max-w-md'
            />
            <button onClick={onSearch} className="text-md px-4 py-2 bg-purple-800 text-white rounded-lg">Search</button>
            </div>
            
        </div>
    )
}

export default SearchBar;