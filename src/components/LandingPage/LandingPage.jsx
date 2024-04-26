import RainbowSquare from "./RainbowSquare"

const LandingPage = () =>{
    return(
        <div id="landing">
            {/* cont */}
            <div id='nav'>
                {/* nav */}
                <h2><i>SnapSafari</i></h2>
            </div>
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
                </div>
            </div>
        </div>
    )
}
export default LandingPage