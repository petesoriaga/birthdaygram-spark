import { useState } from "react";
import { Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

export const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: newMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };

    // Add bot response
    const botMessage: Message = {
      id: Date.now() + 1,
      text: "Happy Birthday Gab! 🎉🎂",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setNewMessage("");
  };

  return (
    <Card className="h-full flex flex-col bg-white">
      <CardHeader className="border-b">
        <CardTitle className="text-lg font-semibold text-birthday-blue">
          Birthday Chat
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0 flex flex-col">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-birthday-blue text-white"
                      : "bg-gray-100"
                  }`}
                >
                  <p>{message.text}</p>
                  <span className="text-xs opacity-70">{message.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <form
          onSubmit={handleSendMessage}
          className="border-t p-4 flex gap-2 items-center"
        >
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button
            type="submit"
            size="icon"
            className="bg-birthday-blue hover:bg-birthday-purple"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};