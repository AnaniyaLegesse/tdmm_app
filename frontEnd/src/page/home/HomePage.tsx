import { Areachart } from "@/components/areachart"
import { Barchart } from "@/components/barchart"
import { Piechart } from "@/components/piechart"




const HomePage = () => {
    return ( 
        <div className="mt-10">
            Report page
        <div className="mt-10 flex flex-cols justify-center gap-20">
            <Areachart />
            <Barchart/>
            <Piechart/>      
        </div>
        </div>
     );
}
 
export default HomePage;