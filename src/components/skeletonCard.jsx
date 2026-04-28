function SkeletonCard(){
    return(
    <div className="animate-pulse flex flex-col gap-4 border border-gray-200 p-2">
        <div className="bg-gray-300 h-48 w-full rounded"/>
        <div className="bg-gray-300 h-4 w-3/4 rounded mx-auto"/>
        <div className="bg-gray-300 h-8 w-1/2 rounded mx-auto"/>
    </div>
    )
}

export default SkeletonCard;