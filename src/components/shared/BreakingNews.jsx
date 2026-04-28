import Marquee from "react-fast-marquee";

const breakingNews = [
    {
        id: 1,
        title: "Breaking News: Local Man Opens 17th Productivity App, Still Gets Nothing Done.",
        category: "Technology",
        time: "2 mins ago"
    },
    {
        id: 2,
        title: "Breaking News: Government Announces New Monday to Motivate People Who Hate Mondays.",
        category: "Politics",
        time: "10 mins ago"
    },
    {
        id: 3,
        title: "Breaking News: Gym Membership Purchased, Fitness Journey Officially Complete.",
        category: "Lifestyle",
        time: "25 mins ago"
    },
    {
        id: 4,
        title: "Breaking News: Student Watches One Tutorial, Prepares to Apply for Senior Developer Role.",
        category: "Education",
        time: "1 hour ago"
    }
];



const BreakingNews = () => {
    return (
        <div className=" flex justify-between items-center bg-gray-200 py-4 px-2">
            <button className="btn btn-secondary">Latest News</button>
            <Marquee speed={60}>
                {breakingNews.map((n)=>(
                    <span className="mx-6" key={n.id}>{n.title}</span>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;