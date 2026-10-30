"use client";

import { SignUpPage } from "@/components/ui/sign-up";
import { Testimonial } from "@/components/ui/sign-in";
import { useRouter } from "next/navigation";

const sampleTestimonials: Testimonial[] = [
  {
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    name: "Priya Sharma",
    handle: "@priyadigital",
    text: "AgentOS completely changed how we hire and scale. The intelligence is unmatched."
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
    name: "Rohan Patel",
    handle: "@rohan_tech",
    text: "This platform has transformed my workflows. Beautiful interface, powerful agents."
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=150&auto=format&fit=crop",
    name: "Arjun Verma",
    handle: "@arjuncreates",
    text: "Incredible ecosystem. Setting up my autonomous team took literally minutes."
  },
];

export default function RegisterPage() {
  const router = useRouter();

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Sign Up submitted:", data);
    router.push("/");
  };

  const handleGoogleSignIn = () => {
    console.log("Continue with Google clicked");
    router.push("/");
  };

  const handleGithubSignIn = () => {
    console.log("Continue with GitHub clicked");
    router.push("/");
  };
  
  const handleSignInClick = () => {
    router.push("/login");
  }

  return (
    <div className="dark bg-background min-h-screen text-foreground relative">
      <SignUpPage
        title={<span className="font-light tracking-tighter text-foreground">Create Account</span>}
        description="Join AgentOS and scale your autonomous workforce."
        heroImageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
        testimonials={sampleTestimonials}
        onSignUp={handleSignUp}
        onGoogleSignIn={handleGoogleSignIn}
        onGithubSignIn={handleGithubSignIn}
        onSignInClick={handleSignInClick}
      />
    </div>
  );
}
