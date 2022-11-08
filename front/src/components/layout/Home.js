import React, { Fragment, useEffect } from 'react'
import Metadata from './Metadata'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../../actions/productActions'


export const Home = () => {
    
    const {products} = useSelector(state => state.products)

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    return (
        <Fragment>
        <Metadata title="Proyecto Estudio"></Metadata>
        <h1 id='encabezado_productos' className='text-center'> Últimos Productos</h1>

            <section id='productos' className='container mt-5'>
                <div className='row'>
                    {products && products.map(product =>(
                        <div key={product._id} className='col-sm-12 col-md-6 col-lg-3 my-4'>
                            <div class="card">
                                <img className="card-img-top mx-auto mt-3" src={product.image[0].url} alt={product.image[0].public_id}></img>
                                <div className="card-body d-flex flex-column">
                                    <h5 id='titulo_producto'><a href='/home'>{product.description}</a></h5>
                                    <div className='rating mt-auto bg-red'>
                                        <div className='rating-outer'>
                                            <div className='rating-inner'></div>
                                        </div>
                                        <span id='numero_opiniones'>{product.score}</span>
                                    </div>
                                    <p className='card-text'>${product.price}</p>
                                    <a href='/home' id='ver_producto' className='btn btn-warning mt-2'>Ver detalle</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Fragment>
    )
}

export default Home