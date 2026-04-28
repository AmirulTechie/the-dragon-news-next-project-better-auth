import LeftSideBar from "@/components/hompage/news/LeftSideBar";
import NewsCard from "@/components/hompage/news/NewsCard";
import RightSideBar from "@/components/hompage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";





export default async function NewsCategoryPage({ params }) {
    const { id } = await params;
    const categories = await getCategories();
    const news = await getNewsByCategoryId(id);

    return (
        <div className="grid grid-cols-12 gap-4 my-14 px-4">
            <div className="col-span-3">
                <LeftSideBar categoreis={categories} activeId={id} />
            </div>

            <div className="col-span-6">
                <h2 className="font-semibold mb-10">Dragon News Home</h2>
                <div className="space-y-10">
                    {news.length > 0
                        ? news.map(n => <NewsCard news={n} key={n._id} />)
                        : <h2 className="text-center mt-30 text-2xl">No news here</h2>
                    }
                </div>
            </div>

            <div className="col-span-3 ml-10">
                <RightSideBar />
            </div>
        </div>
    );
}
