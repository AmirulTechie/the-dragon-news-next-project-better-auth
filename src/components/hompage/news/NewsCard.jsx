import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const NewsCard = ({news}) => {
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <div className="card-body">
                <div className="flex gap-1 items-center justify-between bg-slate-200 p-4">
                    <div className="flex justify-center gap-3">
                        <Image src={news.author?.img} alt={news.author?.name} width={40} height={40}
                        className="rounded-full"
                        ></Image>
                    <div className="">
                        <h2 className="font-semibold">{news.author?.name}</h2>
                        <p className="text-xs">{news.author?.published_date}</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-2 text-xl">
                        <div>

                            <CiShare2></CiShare2>
                        </div>
                        <div>

                            <CiBookmark></CiBookmark>
                        </div>
                    </div>
                </div>
                
                <h2 className="text-2xl font-bold">{news.title}</h2>
            <figure>
                <Image src={news.image_url} alt="Image" width={1000} height={1000} className="w-full"></Image>
            </figure>
                <p className="mt-5 font-semibold line-clamp-2">{news.details}</p>

                <div className="flex justify-between items-center mt-5">
                    <div className="flex gap-2">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-500 text-lg"></FaStar> {news.rating.number}
                        </div>
                                |
                        <div className="flex items-center gap-1">
                        <IoEyeSharp className="text-lg"></IoEyeSharp>
                         {news.total_view}
                        </div>
                    </div>
                    <Link href={`/news/${news._id}`}>
                    <button className="btn btn-soft">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;