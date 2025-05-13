export default function MoviesFilter() {
    return (
        <section>
            <div className="flex justify-center items-center flex-col font-josefin gap-2 p-4">
                <h2 className="text-2xl">Popular</h2>
                <div className="flex items-center gap-8">
                    <ul className="flex space-x-4">
                        <li>8+</li>
                        <li>7+</li>
                        <li>6+</li>
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
        </section>
    );
}