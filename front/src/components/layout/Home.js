import React, { Fragment } from 'react'
import Metadata from './Metadata'

export const Home = () => {
    return (
        <Fragment>
        <Metadata title="Proyecto Estudio"></Metadata>
        <h1 id='encabezado_productos' className='text-center'> Últimos Productos</h1>

            <section id='productos' className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div class="card">
                            <img class="card-img-top mx-auto" src="./images/logo.png" alt='imagen prueba'></img>
                            <div class="card-body d-flex flex-column">
                                <h3 id='titulo_producto'><a href='/home'>Titulo del producto</a></h3>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='numero_opiniones'>5 reviews</span>
                                </div>
                                <p className='card-text'>$125.000</p>
                                <a href='/home' id='ver_producto' className='btn btn-warning mt-2'>Ver detalle</a>
                            </div>
                        </div>
                    </div>


                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div class="card">
                            <img class="card-img-top mx-auto" src="./images/logo.png" alt='imagen prueba'></img>
                            <div class="card-body d-flex flex-column">
                                <h3 id='titulo_producto'><a href='/home'>Titulo del producto</a></h3>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='numero_opiniones'>5 reviews</span>
                                </div>
                                <p className='card-text'>$125.000</p>
                                <a href='/home' id='ver_producto' className='btn btn-warning mt-2'>Ver detalle</a>
                            </div>
                        </div>
                    </div>


                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div class="card">
                            <img class="card-img-top mx-auto" src="./images/logo.png" alt='imagen prueba'></img>
                            <div class="card-body d-flex flex-column">
                                <h3 id='titulo_producto'><a href='/home'>Titulo del producto</a></h3>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='numero_opiniones'>5 reviews</span>
                                </div>
                                <p className='card-text'>$125.000</p>
                                <a href='/home' id='ver_producto' className='btn btn-warning mt-2'>Ver detalle</a>
                            </div>
                        </div>
                    </div>


                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div class="card">
                            <img class="card-img-top mx-auto" src="./images/logo.png" alt='imagen prueba'></img>
                            <div class="card-body d-flex flex-column">
                                <h3 id='titulo_producto'><a href='/home'>Titulo del producto</a></h3>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='numero_opiniones'>5 reviews</span>
                                </div>
                                <p className='card-text'>$75.000</p>
                                <a href='/home' id='ver_producto' className='btn btn-warning mt-2'>Ver detalle</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home