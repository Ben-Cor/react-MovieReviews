import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MoviesFilter() {
    const [films, setFilms] = useState([]); // State to store fetched films
    const [rating, setRating] = useState(0); // State to store the selected rating
    const [filteredFilms , setFilteredFilms] = useState([]); // State to store filtered films


    const fetchFilms = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8c2e0cec179f15c034b52f686d8ce61");
            const data = await response.json();
            setFilms(data.results); // Store the fetched films in state
            setFilteredFilms(data.results); // Initialize filtered films with all fetched films
        } catch (error) {
            console.error("Error fetching films:", error);
        }
    }

    const handleClickRating = (ratingFilter) => {
        if (ratingFilter === rating) {
            setRating(0); // Reset rating if the same button is clicked
            setFilms(filteredFilms); // Show all films
        } else {
            setRating(ratingFilter); // Set the new rating
            const filtered = filteredFilms.filter((film) => film.vote_average >= ratingFilter); // Filter films based on rating
            setFilms(filtered);
        }
    }

    // Fetching data from the API - popularFilms
    useEffect(() => {fetchFilms();}, []);

    return (
        <section>
            <div className="flex justify-center items-center flex-col font-josefin gap-2 p-4">
                <h2 className="text-2xl">Popular</h2>
                <div className="flex items-center gap-8">
                    <ul className="flex space-x-4">
                        <li className={`cursor-pointer ${rating === 8 ? "underline decoration-solid" : "" }`} onClick={() => handleClickRating(8)}>8+</li>
                        <li className={`cursor-pointer ${rating === 7 ? "underline decoration-solid" : "" }`} onClick={() => handleClickRating(7)}>7+</li>
                        <li className={`cursor-pointer ${rating === 6 ? "underline decoration-solid" : "" }`} onClick={() => handleClickRating(6)}>6+</li>
                    </ul>
                    <div className="flex gap-8">
                        <select className="border-[1px] rounded-sm p-2" name="filter" id="filter">
                            <option value="">Sort By</option>
                            <option value="date">Date</option>
                            <option value="rating">Rating</option>
                        </select>
                        <select className="border-[1px] rounded-sm p-2" name="order" id="order">
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-14">
                {films.map((film) => (
                    <MovieCard key={film.id} film={film} />
                ))}
            </div>
        </section>
    );
}