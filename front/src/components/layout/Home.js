import React, { Fragment } from 'react'

export const Home = () => {
    return (
        <Fragment>
        <h1 id='encabezado_productos'> Últimos Productos</h1>
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6 my-3'>
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top mx-auto" src="/images/<%=articulos[articulo].imagen %> " width="100%">
                    <div class="card-body d-flex flex-column">
                        <h5 id='titulo_producto'><a href='#'>Titulo del producto</a></h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong><h5>Precio:</h5></strong>
                                
                            </li>
                            <li class="list-group-item">Caracteristicas:<br>
                                <p class="text-muted" style="font-size: small;">
                                    
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                            <form class="form-inline" method="post" action="/libros/eliminar/<%=articulos[articulo].id_articulo %>">
                                <button class="btn btn-sm"><i class="fa-solid fa-pen" style="color:#294056"></i></button>
                            </form>
                        </div>
                        <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                            <form class="form-inline" method="post" action="/libros/eliminar/<%=articulos[articulo].id_articulo %>">
                                <button class="btn btn-sm"><i class="fa-solid fa-trash" style="color:#ee7e71"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Home