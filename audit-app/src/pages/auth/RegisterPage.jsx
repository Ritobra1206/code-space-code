// RegisterPage.jsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

export default function RegisterPage({ onRegisterSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Assuming registration is successful for now
    toast.success("Registration successful!");

    // Call the onRegisterSuccess callback
    onRegisterSuccess();
    
    // Redirect to dashboard
    navigate('/dashboard');

// Backend integration (commented out for now):
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const response = await fetch('/api/register', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ name, email, password }),
    //     });
    //     const result = await response.json();
    //     if (result.success) {
    //       toast.success("Registration successful!");
    //     } else {
    //       toast.error(result.message || "Registration failed.");
    //     }
    //   } catch (error) {
    //     toast.error("An error occurred. Please try again.");
    //   }
    // };



  };

  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/blue-abstract-gradient-wave-vector-background_53876-111548.jpg')] bg-cover bg-center min-h-screen w-full flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Enter your credentials to register.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
            <p>Already have an account? <a href="/login">Login</a></p>
            <div className="mt-4 flex justify-center gap-10">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Register</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </div>
  );
}
