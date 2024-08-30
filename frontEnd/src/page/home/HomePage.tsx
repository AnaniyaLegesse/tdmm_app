import { Areachart } from "@/components/areachart"
import { Barchart } from "@/components/barchart"
import { Piechart } from "@/components/piechart"




const HomePage = () => {
    return ( 
        <div className="">
            Report page
        <div className="flex gap-2 mt-5 justify-center">
            <div className="w-1/2">
                <Areachart />
            </div>
             <Piechart/>               
        </div>

        <div className="flex gap-2 mt-5 justify-center">
             <Piechart/>   
            <div className="w-1/2">
             <Barchart/>  
            </div>        
        </div>
         
        </div>
     );
}
 
export default HomePage;