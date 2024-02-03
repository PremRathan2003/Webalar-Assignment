import './footer.css'

const Footer = () => (
   <div className='footer-bg'>
        <div className='footer-row'>
            <div className="logo-name-container top">
                <img src = "https://res.cloudinary.com/dh9tpjqbw/image/upload/v1706639210/Screenshot_2024-01-30_235452_rvowaw.png" alt = "Raftlogo" className="footer-logo"/>
                <h1 className='footer-heading'>Raft</h1>
            </div>
            <div className='footer-row2'>
                <ul className='footer-ul-list'>
                    <li className='footer-list-item white'>
                        Home
                    </li>
                    <li className='footer-list-item'>
                       Offering
                    </li>
                    <li className='footer-list-item'>
                         Benefits
                    </li>
                    <li className='footer-list-item'>
                        Testimonials                    </li>
                    <li className='footer-list-item'>
                        News
                    </li>
                </ul>
                <ul className='footer-ul-list'>
                    <li className='footer-list-item white'>
                    Science
                    </li>
                    <li className='footer-list-item'>
                         Benefits
                    </li>
                    <li className='footer-list-item'>
                    Examples                    </li>
                    <li className='footer-list-item'>
                    Scientists
                    </li>
                </ul>
                <ul className='footer-ul-list'>
                    <li className='footer-list-item white'>
                    Platform
                    </li>
                    <li className='footer-list-item'>
                    Services & Products
                    </li>
                    <li className='footer-list-item'>
                    Key Facts
                    </li>
                    <li className='footer-list-item'>
                    Case Studies
                    </li>
                    <li className='footer-list-item'>Testimonials</li>
                </ul>
                <ul className='footer-ul-list'>
                    <li className='footer-list-item white'>
                    About Us
                    </li>
                    <li className='footer-list-item'>
                    Mission & Vision                    </li>
                    <li className='footer-list-item'>
                    Company Values                    </li>
                    <li className='footer-list-item'>
                    Team                    </li>
                    <li className='footer-list-item'>
                        Jobs
                    </li>
                    <li className='footer-list-item'>
                        Awards
                    </li>
                </ul>
            </div>
        </div>
        <div className='footer-row'>
            <h1 className='copy-heading'>© 2023 Psychology and Counseling. All Rights Reserved. With love by Elmous</h1>
            <img src="https://res.cloudinary.com/dh9tpjqbw/image/upload/v1706890607/Screenshot_2024-02-02_214608_zuzgqu.png" alt="media" className='social-media-img'/>
        </div>
   </div>

)
export default Footer