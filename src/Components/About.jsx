import React from 'react'
import img1 from '../assets/img/pexels-vincent-rivaud-2147491.jpg'

const About = () => {
  return (
    <div>
      
    <div className="cotainer mt-4">
        <div className="text-center">
            <h1>About Pizza</h1>
        </div>
        <div className="row">
            <div className="col-md-6">
                <img src={img1} className="img-fluid d-block mx-auto about-img" alt="A Lady holding a pizza"/>
            </div>
            <div className="col-md-6">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis modi vitae obcaecati incidunt!
                    Minima debitis illo ipsa dolore dignissimos dolor fugit facilis! Rem ea magnam doloremque! Omnis
                    magnam in minus adipisci quo tempora, ea voluptates exercitationem dicta quaerat perspiciatis aut et
                    commodi fugit facilis quas? Quia minus a architecto tenetur!
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem nulla maxime aspernatur consequuntur ipsum autem quos sit totam inventore impedit minima consequatur, fugiat earum expedita aut veniam omnis ratione perferendis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere molestias blanditiis aliquid odio, aliquam cumque fugiat nobis voluptate eaque temporibus iste officia numquam sapiente vero libero ducimus deleniti asperiores.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quae vero vel dolores voluptas placeat voluptatibus consequatur perspiciatis, asperiores exercitationem sequi, labore ipsa reprehenderit tempora cum perferendis repellat. Aliquid, veniam!
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
