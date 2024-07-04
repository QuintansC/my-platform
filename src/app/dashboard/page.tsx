import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard({ ...props}) {
  const session = await getServerSession()

  if(!session){
    redirect("/auth/signin");
  }
  return (
    <>
      <DefaultLayout {...props} >
        <ECommerce />
      </DefaultLayout>
    </>
  );  
}