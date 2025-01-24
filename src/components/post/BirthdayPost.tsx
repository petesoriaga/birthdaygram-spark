import { Heart } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BirthdayPostProps {
  username: string;
  userImage: string;
  postImage: string;
  caption: string;
  timestamp: string;
}

export const BirthdayPost = ({
  username,
  userImage,
  postImage,
  caption,
  timestamp,
}: BirthdayPostProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="max-w-[500px] w-full bg-white">
      <CardHeader className="flex-row items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src={userImage} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        <span className="font-semibold">{username}</span>
      </CardHeader>
      <CardContent className="p-0">
        <img
          src={postImage}
          alt="Birthday post"
          className="w-full h-[400px] object-cover"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLiked(!liked)}
            className={liked ? "text-red-500" : ""}
          >
            <Heart className="h-6 w-6" fill={liked ? "currentColor" : "none"} />
          </Button>
        </div>
        <p>
          <span className="font-semibold">{username}</span> {caption}
        </p>
        <span className="text-sm text-gray-500">{timestamp}</span>
      </CardFooter>
    </Card>
  );
};