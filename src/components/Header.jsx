export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-josefin font-bold">Movie Reviews</h1>
            <nav className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">Home</a>
                <a href="#" className="hover:text-gray-400">About</a>
                <a href="#" className="hover:text-gray-400">Contact</a>
            </nav>
        </header>
    )
}