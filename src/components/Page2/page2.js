import './page2.css'

const Page2 = () => (
    <div className = 'page2-container'>
        <ul className="ul-list-therapht">
            <li className = "theraphy-list">
                <img src = "https://res.cloudinary.com/dh9tpjqbw/image/upload/v1706866690/Screenshot_2024-02-02_150722_y2hvxf.png" alt = "theraphy" className = "theraphy-img"/>
                <h1 className = "list-heading">Quality Theraphy</h1>
                <p className = "list-desc">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis</p>
            </li>
            <li className = "theraphy-list">
                <img src = "https://res.cloudinary.com/dh9tpjqbw/image/upload/v1706867507/Screenshot_2024-02-02_152101_mh1teg.png" alt = "theraphy" className = "theraphy-img"/>
                <h1 className = "list-heading">Couple Theraphy</h1>
                <p className = "list-desc">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled</p>
            </li>
            <li className = "theraphy-list">
                <img src = "https://res.cloudinary.com/dh9tpjqbw/image/upload/v1706867507/Screenshot_2024-02-02_152129_vdcakr.png" alt = "theraphy" className = "theraphy-img"/>
                <h1 className = "list-heading">Group Theraphy</h1>
                <p className = "list-desc">These cases are perfectly simple and easy to distinguish</p>
            </li>
        </ul>
        <h1 className = "discover-heading">Discover the Power of Psychology and <br/> Counseling with Our Expert Team</h1>
        <div className = "team-container">
            <img src = "https://img.freepik.com/premium-vector/psychotherapy-people-group-therapy-with-counselor_316839-1845.jpg" alt = "team" className = "team-img"/>
            <ul className = "team-list">
                <li className = "team-list-item"> 
                    <h1 className = "team-heading">1  Jessica Johnson {' '}</h1>
                    <p className = "team-para">(Family Theraphy)</p>
                </li>
                <hr className = "hr-line"/>
                <li className = "team-list-item2"> 
                    <div className = "team-row">
                    <h1 className = "team-heading blue-heading">2  Ethan Ramirez {' '}</h1>
                    <p className = "team-para">(Family Theraphy)</p>
                    </div>
                    <p className = "team-para2">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
                </li>
                <hr className = "hr-line"/>
                <li className = "team-list-item"> 
                    <h1 className = "team-heading">3  Olivia Lee {' '}</h1>
                    <p className = "team-para">(Depression Problem)</p>
                </li>
                <hr className = "hr-line"/>
                <li className = "team-list-item"> 
                    <h1 className = "team-heading">4  Ryan Patel {' '}</h1>
                    <p className = "team-para">(Family Theraphy)</p>
                </li>
                <hr className = "hr-line"/>
                <li className = "team-list-item"> 
                    <h1 className = "team-heading">5  Maya Davis {' '}</h1>
                    <p className = "team-para">(Depression Problem)</p>
                </li>
                <hr className = "hr-line"/>
                <li className = "team-list-item"> 
                    <h1 className = "team-heading">6  Tyler Nguyen{' '}</h1>
                    <p className = "team-para">(Family Theraphy)</p>
                </li>
                <hr className = "hr-line"/>
                <li className = "team-list-item"> 
                    <h1 className = "team-heading">7  Jordan Green {' '}</h1>
                    <p className = "team-para">(Depression Problem)</p>
                </li>
                <hr className = "hr-line"/>
            <button type="button" className = "learn-btn">Learn More</button>
            </ul>
        </div>
<h1 className = "last-heading">We’re The Leading <br/>Advisory Centre For You</h1>
    </div>
)
export default Page2