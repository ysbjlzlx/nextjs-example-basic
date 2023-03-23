import ButtonPage from "@/components/client/ButtonPage";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href={"/client"}>Client</Link>
      <br />
      <Link href="/server">Server</Link>
      <br />
      <Link href="/mix">Mix</Link>
      <br />
      <ButtonPage />
    </>
  );
}
