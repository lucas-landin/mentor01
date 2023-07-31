
import  Results  from "./components/Results"
import Chart from "./components/Chart"


export default function Home() {
  return (
    <div className=" flex flex-col w-full h-screen md:w-[600px] md:h-[500px] md:grid md:grid-cols-2  md:shadow-lg md:rounded-[20px]" >
      <Results />
       <Chart />
    </div>
  )
}
