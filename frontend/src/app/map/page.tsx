import { fetchSupabaseData } from "@/lib/fetchSupabase";

export default async function Page() {
  const data = await fetchSupabaseData("property");

  return (
    <div>
      <h1>Supabase Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}