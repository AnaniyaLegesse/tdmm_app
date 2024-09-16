import { Areachart } from "@/components/areachart"
import { Barchart } from "@/components/barchart"





const HomePage = () => {
    return (         
        <div className="grid grid-cols-2 gap-4 pt-5">
            
                <Areachart />
                <Barchart/>                   
        </div>  
        
     );
}
 
export default HomePage;