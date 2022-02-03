 import "./featuredInfo.css"
 import {Percent, Spa, Spoke } from "@mui/icons-material"

export const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
            <div className="featuredsection">
                   <span className="featureIconOne"> <Spoke/> </span>
                     </div>
                    <span className="featureTitleOne">ESI</span>
                    <div className="featureMoneyContainer">
                    <span className="featureMoney">$1,834.00</span>
                    </div>
                    <span className="featureMoneyRate">
                       View details</span>
            </div>

            <div className="featuredItem">
            <div className="featuredsection">
                   <span className="featureIconTwo"> <Spa/> </span>
                     </div>
                    <span className="featureTitleTwo">EPS</span>
                    <div className="featureMoneyContainer">
                    <span className="featureMoney">$31,978.18</span>
                    </div>
                    <span className="featureMoneyRate">
                        View details</span>
            </div>

            <div className="featuredItem">
                 <div className="featuredsection">
                   <span className="featureIcon"> <Percent/> </span>
                     </div>
                    <span className="featureTitleThree">TDS Deduction</span>
                    <div className="featureMoneyContainer">
                    <span className="featureMoney">$158,499.00</span>
                    </div>
                    <span className="featureMoneyRate">View details</span>
            </div>

            <div className="featuredItem">
                    <span className="featureTitle">Active Employee</span>
                    <div className="featureMoneyContainer">
                    <span className="featureRate"> 10 </span>
                    </div>
                    <span className="featureMoneyRates">
                       View Employees</span>
            </div>
            
        </div>
    )
}
