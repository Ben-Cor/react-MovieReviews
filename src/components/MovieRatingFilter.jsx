export default function MovieRatingFilter({ rating, handleClickRating }) {
    return (
        <ul className="flex space-x-4">
            <li className={`cursor-pointer ${rating === 8 ? "underline decoration-solid" : "" }`} onClick={() => handleClickRating(8)}>8+</li>
            <li className={`cursor-pointer ${rating === 7 ? "underline decoration-solid" : "" }`} onClick={() => handleClickRating(7)}>7+</li>
            <li className={`cursor-pointer ${rating === 6 ? "underline decoration-solid" : "" }`} onClick={() => handleClickRating(6)}>6+</li>
        </ul>
    );
}