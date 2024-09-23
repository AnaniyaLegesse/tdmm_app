import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown } from "lucide-react"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Define the shape of your data
export type ProjectPageData = {
  id: string
  name: string
  budget: number
  utlized_amount: number
  variance: number
  status: string
}

export const projectPageColumns: ColumnDef<ProjectPageData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
   
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Project name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      
      return (
          <div className="text-left ml-5 font-medium">
            {row.getValue("name")}
            </div>)
    },
  },
  {
    accessorKey: "budget",
    header: () => <div className="text-left">Budget</div>,
    cell: ({ row }) => {
      const budget = parseFloat(row.getValue("budget"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(budget)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "utlized_amount",
    header: () => <div className="text-left">Utlized Amount</div>,
    cell: ({ row }) => {
      const utlized_amount = parseFloat(row.getValue("utlized_amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(utlized_amount)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "variance",
    header: () => <div className="text-left">Variance</div>,
    cell: ({ row }) => {
      const variance = parseFloat(row.getValue("variance"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(variance)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
  
      return (
            <div className="text-left font-medium">
              {row.getValue("status")}
            </div>
              )
    },
  },
  
    
  {
    id: "actions",
    header: () => <div className="text-left">More</div>,
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  
]


export type FundPageData = {
  id: string
  name: string
  amount: number
  fund_type: String
  createdAt: string
}

export const FundPageColumns: ColumnDef<FundPageData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
   
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Donner name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      
      return (
          <div className="text-left ml-5 font-medium">
            {row.getValue("name")}
            </div>)
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-left">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  
  {
    accessorKey: "fund_type",
    header: () => <div className="text-left">Fund type</div>,
    cell: ({ row }) => {
      
      return (
          <div className="text-left font-medium">
            {row.getValue("fund_type")}
            </div>)
    },
  },
  {
    header: () => <div className="text-left">Date</div>,
    accessorKey: 'createdAt',
    cell: ({ row }) => {
      
      return (
          <div className="text-left font-medium">
            {new Date(row.getValue("createdAt")).toLocaleDateString()}
            </div>)
    },
  },
    
  {
    id: "actions",
    header: "More",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  
]


export type CostPageData = {
  id: string
  name: string
  amount: number
  project: string
  createdAt: string
}

export const CostPageColumns: ColumnDef<CostPageData>[] = [
 
  {
    accessorKey: "name",
   
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      
      return (
          <div className="text-left ml-5 font-medium">
            {row.getValue("name")}
            </div>)
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-left">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  
  {
    accessorKey: "project",
    header: () => <div className="text-left">Project</div>,
    cell: ({ row }) => {
      
      return (
          <div className="text-left font-medium">
            {row.getValue("project")}
            </div>)
    },
  },
  {
    header: () => <div className="text-left">Date</div>,
    accessorKey: 'createdAt',
    cell: ({ row }) => {
      
      return (
          <div className="text-left font-medium">
            {new Date(row.getValue("createdAt")).toLocaleDateString()}
            </div>)
    },
  },
    
  {
    id: "actions",
    header: "More",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  
]