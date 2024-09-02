import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hardcodedCredentials = {
    email: "user@gmail.com",
    password: "Test@123456",
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === hardcodedCredentials.email && password === hardcodedCredentials.password) {
      toast.success("Login successful!");

      // Call the onLoginSuccess callback
      onLoginSuccess();

      // Redirect to dashboard
      navigate('/dashboard');
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/blue-abstract-gradient-wave-vector-background_53876-111548.jpg')] bg-cover bg-center min-h-screen w-full flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to log in.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <p className="mt-4">Don't have an account? <a href="/">Register</a></p>
            <div className="mt-4 flex justify-center gap-10">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Login</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </div>
  );
}
