import "./motivate.css"
import remote from '../../images/undraw_remotely_2j6y.svg'

export default function Motivate ()  {
    return (
        <div className="motivate">
            <h3 className="motivateTitle"> Process </h3> 
            <div className="motivateWrapper">
            <div>
            <span className="logo" > 
                     <img src={remote} alt="Remote"/>
                 </span> 
            </div>

            <div>
            <h5 className="motivateChild">Take a well-deserved break</h5>
           {/* <div className="motivateQuoteContainer"> */}
                    <p className="motivateQuote">You have no outstanding pay-run, we will notify you when the next pay-run is to be notified</p>
                 {/* </div> */}
            </div>

            </div>
           
        </div>
    )
}

