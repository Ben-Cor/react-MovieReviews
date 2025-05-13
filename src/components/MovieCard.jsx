import starIcon from "../assets/star-outline.svg";

export default function MovieCard() {
    return (
        <a className="font-josefin flex flex-col justify-center items-center p-4 border-2" href="">
            <img src="https://preview.redd.it/whats-a-movie-you-feel-had-a-lot-of-interesting-ideas-but-v0-kkkgiak7j8te1.jpeg?width=640&crop=smart&auto=webp&s=a505d4e5f407f8d85eeaba451e67473964b957e3" 
            alt="" />
            <div className="pt-4 flex flex-col gap-2 justify-center items-center">
                <h3 className="text-2xl">Us</h3>
                <div className="flex flex-col justify-center items-center gap-2">
                    <p>22-03-2019</p>
                    <p className="flex gap-[2px]">8.0{""} <img className="w-[15px]" src={starIcon} alt="Star" /> </p>
                </div>
            </div>
        </a>
    );
}