import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  budget: z.coerce.number()
})

export function AddProject() {

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  const onSubmit = async(values: z.infer<typeof formSchema>) =>{

        const response=await fetch('http://localhost:4000/api/projects',{
          method:'POST',
          body:JSON.stringify(values),
          headers:{
            'Content-Type':'application/json'
          }
        })

        
        if(response.ok){
          toast.success('New Project added successfully')
          navigate('/projects')
        }   else {
          toast.error('Error adding new Project')
        }      
  }

  return (
    <div className="m-10 w-[50%]">
      <h1 className="text-xl  font-semibold">Add new Project!</h1>
      <div className="mt-10">
        <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="text-left space-y-8">
                  {/* NAME FIELD */}
                  <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                          <FormItem>
                              <FormLabel>Project name</FormLabel>
                              <FormControl>
                                  <Input placeholder="Enter project name" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                  />

                  {/* BUDGET FIELD */}
                  <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                          <FormItem>
                              <FormLabel>Budget</FormLabel>
                              <FormControl>
                                  <Input placeholder="Enter the buget allocated fro the project." {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                  />

                  <Button type="submit">Submit</Button>
                </form>
        </Form>
      </div>
    </div>
  )
}
