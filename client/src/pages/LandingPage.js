import React from 'react'
import Header from './../components/shared/Layout/Header';
import { useSelector } from "react-redux";
import Spinner from '../components/shared/Spinner';

const LandingPage = () => {
    const { loading } = useSelector((state) => state.auth);

    return (
        <>
            {
                loading ? (
                    <Spinner />
                ) :
                    (
                        <div className='container-fluid '>
                            <Header />
                            <section className='l-section'>
                                <div className='row content1'>
                                    <div className='col-md-6 o-quote-box'>
                                        <div className='quote-box'>
                                            <h1 className='txt-donate'>DONATE</h1>
                                            <h1 className='txt-blood'>BLOOD</h1>
                                            <h4 className='txt-giveLife'>GIVE LIFE</h4>
                                        </div>
                                    </div>
                                    <div className='col-md-6 l-banner'>
                                        <img src='./assets/images/doc.png' alt='' />
                                    </div>
                                </div>
                            </section>

                            <section className='l-section-2'>
                                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="./assets/images/banner1.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="./assets/images/banner2.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="./assets/images/banner3.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="./assets/images/banner4.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="./assets/images/banner5.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </section>

                            <section className='l-section-3'>
                                <div className='row justify-content-center'>
                                    <div className='col-md-6 table-container'>
                                        <h3>Blood Type Compatibility</h3>
                                        <div className='table-box'>
                                            <table class="table table-bordered">
                                                <thead className='l-head'>
                                                    <tr>
                                                        <th>Blood Type</th>
                                                        <th>Donate To</th>
                                                        <th>Receive From</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='l-body'>
                                                    <tr>
                                                        <td>A+</td>
                                                        <td>A+, AB+</td>
                                                        <td>A+, A-, O+, O-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>A-</td>
                                                        <td>A+, A-, AB+, AB-</td>
                                                        <td>A-, O-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>B+</td>
                                                        <td>B+, AB+</td>
                                                        <td>B+, B-, O+, O-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>B-</td>
                                                        <td>B+, B-, AB+, AB-</td>
                                                        <td>B-, O-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>AB+</td>
                                                        <td>AB+</td>
                                                        <td>All types</td>
                                                    </tr>
                                                    <tr>
                                                        <td>AB-</td>
                                                        <td>AB+, AB-</td>
                                                        <td>AB-, A-, B-, O-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>O+</td>
                                                        <td>O+, A+, B+, AB+</td>
                                                        <td>O+, O-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>O-</td>
                                                        <td>All types</td>
                                                        <td>O-</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ----------------------FOOTER---------------------------- */}

                            <footer className="footer">
                                <div className="waves">
                                    <div className="wave" id="wave1" />
                                    <div className="wave" id="wave2" />
                                    <div className="wave" id="wave3" />
                                    <div className="wave" id="wave4" />
                                </div>
                                <ul className="social-icon">
                                    <li className="social-icon__item"><a className="social-icon__link" href="/">
                                        <ion-icon name="logo-facebook" />
                                    </a></li>
                                    <li className="social-icon__item"><a className="social-icon__link" href="/">
                                        <ion-icon name="logo-twitter" />
                                    </a></li>
                                    <li className="social-icon__item"><a className="social-icon__link" href="/">
                                        <ion-icon name="logo-linkedin" />
                                    </a></li>
                                    <li className="social-icon__item"><a className="social-icon__link" href="/">
                                        <ion-icon name="logo-instagram" />
                                    </a></li>
                                </ul>
                                <ul className="menu">
                                    <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
                                    <li className="menu__item"><a className="menu__link" href="#">About</a></li>
                                    <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
                                    <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
                                    <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
                                </ul>
                                <p>©2021 Nadine Coelho | All Rights Reserved</p>
                            </footer>

                        </div>
                    )}

        </>
    )
}

export default LandingPage
