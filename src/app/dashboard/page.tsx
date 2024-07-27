import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default async function Dashboard({ ...props}) {
  return (
    <>
      <DefaultLayout {...props} >
        <ECommerce />
      </DefaultLayout>
    </>
  );  
}