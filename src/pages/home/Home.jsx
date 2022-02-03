 import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo"
import "./home.css" 
import Chart  from "../../components/chart/Chart"
import { employeeData } from "../../dummyData"
import Motivate from "../../components/motivate/Motivate"

export default function Home () {
    return (
        <div className="home">
            <Motivate/>
         <FeaturedInfo/>
         <Chart data={employeeData} title="Payroll Cost Summary" dataKey="Active employee"/>
        {/* <Chart data={employeeData} title="Payroll Cost Summary" dataKey=" Unactive employee"/> */}
        </div>
    )
}

