export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-josefin font-bold">Movie Reviews</h1>
            <nav className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">Top Rated Films</a>
                <a href="#" className="hover:text-gray-400">Lowest Rated Films</a>
                <a href="#" className="hover:text-gray-400">Most Popular Films</a>
            </nav>
        </header>
    )
}