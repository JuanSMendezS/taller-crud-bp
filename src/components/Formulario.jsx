import React from 'react'

const Formulario = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Listado de Personajes</h4>
          <ul className="list-group">
            {

            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {

            }
          </h4>
          <form>
            <input type="text" 
            className='form-control mb-2'
            placeholder='Ingrese Personaje'
            value={''}
            onChange={''}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Formulario