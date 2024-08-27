import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    donner_name: z.string().min(2, {
      message: " name must be at least 2 characters.",
    }),
    amount: z.number(),
    fund_type:z.string()

  })
const AddFund = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          donner_name: "",
        },
      })
    
      function onSubmit(values: z.infer<typeof formSchema>) {
               console.log(values)
      }
      
      
    return ( 
      <div className="mt-10 w-[50%]">
          <h1 className="text-xl font-semibold">Add new Fund here!</h1>
          <div className="mt-10 ">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="text-left space-y-8">

                {/* NAME FIELD */}
                <FormField
                    control={form.control}
                    name="donner_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your donner name." {...field} />
                            </FormControl>
                            <FormDescription>
                                
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                 />

                 {/* amount FIELD */}
                 <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Amount</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the amount of donation." {...field} />
                            </FormControl>
                            <FormDescription>
                                 
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                 />

                 {/* type FIELD */}
                 <FormField
                    control={form.control}
                    name="fund_type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Fund Type</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the Type of donation." {...field} />
                            </FormControl>
                            <FormDescription>
                                 
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                 />


                 <Button type="submit">Submit</Button>
               </form>
            </Form>
          </div>
      </div>    
     );
}
 
export default AddFund;