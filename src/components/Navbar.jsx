
function Navbar({brand, links}){
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-purple-300 shadow-md border-b">
            <div className="text-xl font-bold text-red-500">
                {brand}
            </div>
            <div>
                <ul className="flex items-center space-x-4">
                    <li className="text-gray-800 hover:text-red-500"><a href={links}>Home</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar