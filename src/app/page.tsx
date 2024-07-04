'use client'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession();
  if(!session)  return redirect("/auth/signin");  
  return redirect("/dashboard");  
}