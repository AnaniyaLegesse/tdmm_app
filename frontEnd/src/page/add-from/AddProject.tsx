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
    projectname: z.string().min(2, {
      message: "projectname must be at least 2 characters.",
    }),
    budget: z.number()
  })
const AddProject = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          projectname: "",
        },
      })
    
      function onSubmit(values: z.infer<typeof formSchema>) {
               console.log(values)
      }
      
      
    return ( 
        <div className="mt-10 w-[50%]">
          <h1 className="text-xl font-semibold">Add new Project here!</h1>
          <div className="mt-10 ">
            
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="text-left space-y-8">

                  {/* NAME FIELD */}
                  <FormField
                      control={form.control}
                      name="projectname"
                      render={({ field }) => (
                          <FormItem>
                              <FormLabel>Project name</FormLabel>
                              <FormControl>
                                  <Input placeholder="Project 101" {...field} />
                              </FormControl>
                              <FormDescription>
                                  Enter your project name.
                              </FormDescription>
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
                                  <Input placeholder="$ 100000" {...field} />
                              </FormControl>
                              <FormDescription>
                                  Enter the buget allocated fro the project.
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
 
export default AddProject;