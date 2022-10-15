import { db } from '../firebase'
import React from 'react'
import { useState } from 'react'

const Formulario = () => {

  const [personaje, setPersonaje] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState('')


  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Personajes</h4>
          <ul className="list-group">
            {

            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {
              modoEdicion ? 'Editar Personaje' : 'Agregar Personajes'
            }
          </h4>
          <form >
            <input type="text"
              className='form-control mb-2'
              placeholder='Ingrese Personaje'
              value={''}
              onChange={''}
            />

            <input type="text"
              className='form-control mb-2'
              placeholder='Ingrese Descripción'
              value={''}
              onChange={''}
            />

            <input type="text"
              className='form-control mb-2'
              placeholder='Lugar de Origen'
              value={''}
              onChange={''}
            />

            <input type="text"
              className='form-control mb-2'
              placeholder='Ingrese Objeto Insignia'
              value={''}
              onChange={''}
            />

            <input type="text"
              className='form-control mb-2'
              placeholder='Ingrese Personaje'
              value={''}
              onChange={''}
            />

            <input type="text"
              className='form-control mb-2'
              placeholder='Ingrese Personaje'
              value={''}
              onChange={''}
            />

            <input type="text"
              className='form-control mb-2'
              placeholder='Ingrese Personaje'
              value={''}
              onChange={''}
            />

            {
              modoEdicion ?
                (
                  <>
                    <button
                      className="btn btn-warning btn-block"
                      on='submit'>
                      Editar
                    </button>
                    <button className="btn btn-dark btn-block mx-2"
                      onClick={''}>
                      Cancelar
                    </button>
                  </>
                )
                :
                <button className="btn btn-primary btn-block" type='submit'>
                  Agregar
                </button>
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Formulario