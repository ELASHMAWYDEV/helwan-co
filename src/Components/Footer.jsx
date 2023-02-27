import React, { Component } from 'react'
import '../style/footer.css'
import logo from'../assets/Images/helwan-logo.png'

export default class Footer extends Component {
  render() {
    return (
      <>
      <div className="main-footer">
        <div className="container">
        <div className="row">

           <div className="col">
               <h5>Home</h5>
         <ul>
            <li><a href="#">Manufacturing</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Conatct Us</a></li>
         </ul>
            
           
           </div>
          
           
           <div className="col">
           <div className="logoo">
          <img src={logo} alt="" />

            </div>
            <p>Helwan Co. for construction and development

Export and import and agriculturalreclamation</p>
           
           </div>

           </div>
           <hr />
           
            <p className='col-sm'>
                &copy;{new Date().getFullYear()} Helwan Co.
            </p>
           </div>
        </div>
       
      
      </>
    )
  }
}
