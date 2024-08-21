import  { useEffect, useState } from "react"
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

interface PaymentTableProps {
  data?: Payment[] // Optional prop to pass data; if not provided, it will fetch its own
}

export function PaymentTable({ data: initialData }: PaymentTableProps) {
  const [data, setData] = useState<Payment[]>(initialData || [])

  useEffect(() => {
    if (!initialData) {
      async function fetchData() {
        const fetchedData = await getData()
        setData(fetchedData)
      }

      fetchData()
    }
  }, [initialData])

  async function getData(): Promise<Payment[]> {
    // Simulate an API call
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "1a2b3c",
        amount: 250,
        status: "success",
        email: "user1@example.com",
      },
      {
        id: "4d5e6f",
        amount: 150,
        status: "failed",
        email: "user2@example.com",
      },
      // Additional dummy data
    ]
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
