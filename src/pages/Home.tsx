import { BirthdayPost } from "@/components/post/BirthdayPost";

const Home = () => {
  const posts = [
    {
      username: "sarah_birthday",
      userImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      postImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      caption: "Happy birthday to the most amazing friend! 🎂✨",
      timestamp: "2 hours ago",
    },
    {
      username: "party_planner",
      userImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      postImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      caption: "Let's make this birthday unforgettable! 🎉🎈",
      timestamp: "5 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-screen-md mx-auto space-y-6 px-4">
        {posts.map((post, index) => (
          <BirthdayPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Home;