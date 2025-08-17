
import { fetchSupabaseData } from "@/lib/fetchSupabase";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export default async function Page() {
  const data = await fetchSupabaseData("property");

  // If no data, show a message
  if (!data || data.length === 0) {
    return <div>No data found.</div>;
  }

  // Get columns from the first row
  const columns = Object.keys(data[0]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Supabase Data</h1>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col}>{col}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row: any, i: number) => (
            <TableRow key={i}>
              {columns.map((col) => (
                <TableCell key={col}>{String(row[col])}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}