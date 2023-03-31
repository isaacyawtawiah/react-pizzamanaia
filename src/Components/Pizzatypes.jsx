import React from 'react'
import img4 from '../assets/img/p4.jpg'
import img1 from '../assets/img/p6.jpg'
import img2 from '../assets/img/p7.jpg'
import img3 from '../assets/img/p8.jpg'

const Pizzatypes = () => {
  return (
    <div>
     
    <div class="container type mt-5">
        <div class="text-center">
            <h3>Pizza Types</h3>
        </div>
        <div class="row mt-3">
            <div class="col-md-3">
                <div class="card">
                    <img src={img4} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h3 class="card-title">Pizza Inglesina</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card">
                    <img src={img1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h3 class="card-title"> Beef Pizza</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card">
                    <img src={img2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h3 class="card-title">NEB Pizza</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card">
                    <img src={img3} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h3 class="card-title">Pizza Viennesse</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </div>
  )
}

export default Pizzatypes
