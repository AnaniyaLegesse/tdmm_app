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
        id: "11kka",
        project: "project 101",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 102",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 103",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 104",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 105",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 101",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 102",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 103",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 104",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 105",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 101",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 102",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 103",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 104",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        project: "project 105",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
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
