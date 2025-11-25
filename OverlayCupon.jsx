import fifth_image_sec from '/fifth_image_sec.jpg'
import './OverlayCupon.css'
function OverlayCupon() {
    return (
        <>
            <div className="cardd">
                <div className="imgBoxx">
                    <img src={fifth_image_sec} className='img' alt="aaa" />
                    <button className="favm"> 10 - 20 % off</button>

                    <h3 className="til">ikjk</h3>
                    {/* <img src={fifth_image_sec} className="til" alt="logo" /> */}

                </div>
            </div>

            {/* <img src={fifth_image_sec} className="third_image_sec" alt="logo" /> */}
        </>
    )
}
export default OverlayCupon;