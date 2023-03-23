import ClientPage from "@/app/client/page";
import ServerPage from "@/components/server/ServerPage";

const Page = () => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <ServerPage params={{}} />
      <ClientPage />
    </>
  );
};
export default Page;
