import starIcon from "../assets/whitestar.png";
import PropTypes from "prop-types";

export default function MovieCard({ film }) {
    return (
        <a
            className="font-josefin bg-gray-800 text-white shadow-md rounded-lg flex flex-col justify-center items-center p-4 border-2"
            href="#"
        >
            <img
                className="border-[1px] border-white"
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                alt={film.title}
            />
            <div className="pt-4 flex flex-col gap-2 justify-center items-center">
                <h3 className="text-2xl">{film.title}</h3>
                <div className="flex flex-col justify-center items-center gap-2">
                    <p>{film.release_date}</p>
                    <p className="flex justify-center items-center gap-[2px]">
                        {film.vote_average}{" "}
                        <img className="w-[25px] mb-2" src={starIcon} alt="Star" />
                    </p>
                </div>
                <p>{film.genre_ids.join(", ")}</p>
            </div>
        </a>
    );
}

MovieCard.propTypes = {
    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
};