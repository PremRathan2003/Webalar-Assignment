import './index.css'

const Homepage = () => (
    <div className = "home-bg">
        <div className = "row">
            <div className = "desc-container-1">
                <h1 className = "heading">The Individual Counseling & Couples Therapy Expert</h1>
                <p className="paragraph">We leverage microgravity to create tomorrow’s cures with our in-house developed space labs and ground simulators.</p>
                <button type="button" className = "contact-btn">Book Appointment</button>
            </div>
            <div className = "row2">
                <img src = "https://res.cloudinary.com/dh9tpjqbw/image/upload/v1706810709/Screenshot_2024-02-01_233320_xkz9u2.png" alt = "rating" className = "rating-img"/>
                <div className = "">
                    <h1 className="review-heading">Our Happy Customers</h1>
                    <div className="row2">
                        <img src = "https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" alt="star" className="star"/>
                        <h1 className="star-heading">4.9 </h1>
                        <p className="paragragh">{' '} (1.2 Reviews)</p>
                    </div>
                </div>
            </div>
        </div>   
    <div className="row">
        <div className="patner-container">
            <h1 className="partner-heading">Our Partnership</h1>
            <hr className="hr-line" />
            <img src = "https://res.cloudinary.com/dh9tpjqbw/image/upload/v1706960511/Screenshot_2024-02-02_000820_iiei1g.png" alt="partner img" className="partner-img"/>
        </div>
    <div className = "home-container"></div>
    <ul className="ul-list">
            <li className="list-item">
                <h1 className="num-heading">147</h1>
                <p className = "num-paragraph">Space labs launched by our team</p>
            </li>
            <li className="list-item">
                <h1 className="num-heading">50</h1>
                <p className = "num-paragraph">Customers on 4 continents</p>
            </li>
            <li className="list-item">
                <h1 className="num-heading">138</h1>
                <p className = "num-paragraph">Space biology publications</p>
            </li>
        </ul> 
    </div>
    <h1 className="last-heading">We’re The Leading <br/>Advisory Centre For You</h1>
   
</div>
)
export default Homepage