
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PeopleGroupPage = () => {


  const CardData = [
    {img:'/1.jpg', name:'mursi', population:'100', description:'People with a bigger population of new born chritians.church numbers 100.'},
    {img:'/2.jpg', name:'Argoba', population:'180', description:'People with a bigger population of new born chritians.church numbers 100.'},
    {img:'/3.jpg', name:'Shinansha', population:'90', description:'People with a bigger population of new born chritians.church numbers 100.'},
    {img:'/4.jpg', name:'omo valley', population:'50', description:'People with a bigger population of new born chritians.church numbers 100.'},
    {img:'/5.jpg', name:'hammer', population:'70', description:'People with a bigger population of new born chritians.church numbers 100.'},
    {img:'/6.jpg', name:'Ataye', population:'130', description:'People with a bigger population of new born chritians.church numbers 100.'},
    {img:'/7.jpg', name:'Sodo', population:'760', description:'People with a bigger population of new born chritians.church numbers 100.'},
    {img:'/8.jpg', name:'kembata', population:'540', description:'People with a bigger population of new born chritians.church numbers 100.'},

  ]

  return (
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {CardData.map((d) => (
            <Card key={d.name}>
              <img src={d.img} alt="" className="p-2" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                
                <CardTitle className="text-sm font-medium">{d.name}</CardTitle>
                <div className="text-2xl font-bold">{d.population}</div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{d.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> 
  )
}

export default PeopleGroupPage;
