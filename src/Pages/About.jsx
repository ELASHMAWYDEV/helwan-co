import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import'../style/about.css'

export default function About() {
  return (
    <>
    <Header/>
    <div className="about-wrapper">
          <div className="about-section">
            <h1>About US</h1>
          </div>
          </div>
          <div className="about2">
            <div className="content-box-lg">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="about-item text-center">
                    <i className='fa fa-book'></i>
                    <h3>MISSION</h3>
                    <hr />
                    <p>At ElHoda Co. our mission is to provide our customers with the highest quality marble 
                      products and outstanding customer service. We are dedicated to using the latest technology and 
                      top-quality materials to craft unique, durable, and beautiful marble products that transform homes and 
                      commercial spaces. We strive to exceed our customers' expectations by providing exceptional products, 
                      efficient delivery services, and reliable customer support.</p>
                  </div>
                  </div>
                  <div className="col-md-4">
                    <div className="about-item text-center">
                    <i className='fa fa-globe'></i>
                    <h3> VISSION</h3>
                    <hr />
                    <p>Our vision at ElHoda Co. is to become a global leader in the marble industry. 
                      We aspire to expand our business and reach more customers around the world while maintaining our commitment to quality, 
                      innovation, and customer service. We aim to continuously improve our manufacturing processes, adopt sustainable practices, 
                      and invest in the development of our team members to achieve our long-term goals.</p>
                  </div>
                  </div>
                  <div className="col-md-4">
                    <div className="about-item text-center">
                    <i className='fa fa-pencil'></i>
                    <h3>AIM</h3>
                    <hr />
                    <p>At ElHoda Co. our aim is to help our customers transform their spaces with beautiful, 
                      unique, and durable marble products. We are committed to providing a wide variety of marble products 
                      that meet our customers' diverse needs and preferences. Whether you are looking to remodel your home, 
                      renovate your commercial space, or start a new construction project, we have the products and expertise to help you achieve your goals. 
                      We aim to build lasting relationships with our customers by providing exceptional products, reliable services, and outstanding customer support.</p>
                  </div>
                  </div>
                
                
                
                </div>
              </div>
            </div>
          
        </div>
  
    <Footer/>
    </>
  )
}
