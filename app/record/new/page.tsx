import { RecordForm } from "@/components/record-form";

export default function Page() {
  return (
    <main className="container mx-auto p-8 space-y-6">
      <h2 className="text-3xl font-bold text-gray-700">Add New Record</h2>
      <RecordForm />
    </main>
  )
}
