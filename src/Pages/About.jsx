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
                    <i className='fa fa-book'></i>
                    <h3>MISSION</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illo quaerat alias quas.</p>
                  </div>
                  <div className="col-md-4">
                    <i className='fa fa-book'></i>
                    <h3>VISSION</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illo quaerat alias quas.</p>
                  </div>
                  <div className="col-md-4">
                    <i className='fa fa-book'></i>
                    <h3>ACHIEVEMNTS</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illo quaerat alias quas.</p>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
  
    <Footer/>
    </>
  )
}
