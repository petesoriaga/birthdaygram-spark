import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cake } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const LoginForm = () => {
  const [username, setUsername] = useState("gabrielmunsayac");
  const [password, setPassword] = useState("01252006");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, accept any non-empty credentials
    if (username && password) {
      toast({
        title: "Welcome back! 🎉",
        description: "Successfully logged in",
      });
      navigate("/home");
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-[350px] bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-3xl font-bold text-birthday-pink">
          <Cake className="h-8 w-8" />
          BirthdayGram
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-birthday-purple"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-birthday-purple"
          />
          <Button
            type="submit"
            className="w-full bg-birthday-pink hover:bg-birthday-purple text-white"
          >
            Log In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};