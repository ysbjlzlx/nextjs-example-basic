interface Props {
  params: { slug?: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const ServerPage = async ({ params, searchParams }: Props) => {
  const data = await getData();
  return (
    <div>
      <h1>{params.slug || "Server"}</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

async function getData() {
  const res = await fetch("https://httpbin.org/get");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default ServerPage;
