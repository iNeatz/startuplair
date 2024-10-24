import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID("home", "home");

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
