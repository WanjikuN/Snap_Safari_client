import Authentication from "./Authentication"
import RainbowSquare from "./RainbowSquare"

const LandingPage = ({value, setValue}) =>{
    return(
        <div id="landing">
            {/* cont */}
            
            <div id="landing-body">
                {/* body cont */}
                <div id="landing-content">
                    {/* content */}

                    <div id="content-cont">

                        <RainbowSquare />
                    </div>
                </div>
                <div id="auth">
                    {/* auth */}
                    <Authentication  value={value} setValue={setValue}/>
                    
                </div>
            </div>
        </div>
    )
}
export default LandingPage  