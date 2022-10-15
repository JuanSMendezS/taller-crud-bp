import { db } from '../firebase'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { async } from '@firebase/util'

const Formulario = () => {

  const [personaje, setPersonaje] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [nota, setNota] = useState('')
  const [edad, setEdad] = useState('')
  const [objetoInsignia, setObjetoInsignia] = useState('')
  const [origen, setOrigen] = useState('')
  const [rol, setRol] = useState('')
  const [listaPersonajes, setListaPersonajes] = useState([])
  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState('')

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        await onSnapshot(collection(db, 'tbl_personajes'), (query) => {
          setListaPersonajes(query.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos();
  }, [])

  const guardarPersonajes = async (e) => {
    e.preventDefault()
    try {
      const data = await addDoc(collection(db, 'tbl_personajes'), {
        nombrePersonaje: personaje,
        nombreDescripcion: descripcion,
        origen: origen,
        objetoInsignia: objetoInsignia,
        edad: edad,
        rol: rol,
        nota: nota
      })

      setListaPersonajes([
        ...listaPersonajes,
        {
          nombrePersonaje: personaje, nombreDescripcion: descripcion, edad: edad, origen: origen,
          rol: rol, objetoInsignia: objetoInsignia, nota: nota, id: data.id
        }
      ])

      setPersonaje('')
      setDescripcion('')
      setEdad('')
      setNota('')
      setObjetoInsignia('')
      setOrigen('')
      setRol('')
      setId('')

    } catch (error) {
      console.log(error)
    }
  }

  const eliminar = async id => {
    try {
      await deleteDoc(doc(db, 'tbl_personajes', id))
    } catch (error) {
      console.log(error)
    }
  }

  const editar = item => {
    setPersonaje(item.nombrePersonaje)
    setDescripcion(item.nombreDescripcion)
    setEdad(item.edad)
    setNota(item.nota)
    setObjetoInsignia(item.objetoInsignia)
    setOrigen(item.origen)
    setRol(item.rol)
    setId(item.id)
    setModoEdicion(true)
  }

  const editarPersonajes = async e => {
    e.preventDefault()

    try {
      const docRef = doc(db, 'tbl_personajes', id);
      await updateDoc(docRef, {
        nombrePersonaje: personaje,
        nombreDescripcion: descripcion,
        origen: origen,
        objetoInsignia: objetoInsignia,
        edad: edad,
        rol: rol,
        nota: nota
      })

      const nuevoArray = listaPersonajes.map(
        item => item.id === id ? {
          id: id, nombrePersonaje: personaje, nombreDescripcion: descripcion, edad: edad, origen: origen,
          rol: rol, objetoInsignia: objetoInsignia, nota: nota
        } : item
      )

      setListaPersonajes(nuevoArray)
      setModoEdicion(false)
      setPersonaje('')
      setDescripcion('')
      setEdad('')
      setNota('')
      setObjetoInsignia('')
      setOrigen('')
      setRol('')
      setId('')

    } catch (error) {
      console.log(error)
    }
  }

  const cancelar = () => {
    setModoEdicion(false)
    setPersonaje('')
    setDescripcion('')
    setEdad('')
    setNota('')
    setObjetoInsignia('')
    setOrigen('')
    setRol('')
    setId('')
  }

  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Personajes</h4>
          <ul className="list-group">
            {
              listaPersonajes.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead"> {item.nombrePersonaje} - {item.nombreDescripcion} - {item.origen} -</span>
                  <span className="lead"> {item.objetoInsignia} - {item.edad} - {item.rol} -</span>
                  <span className="lead"> {item.nota} </span>
                  <button className="btn btn-danger btn-sm float-end mx2"
                    onClick={() => eliminar(item.id)}> Eliminar </button>
                  <button className="btn btn-warning btn-sm float-end"
                    onClick={() => editar(item)}> Editar </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {
              modoEdicion ? 'Editar Personaje' : 'Agregar Personajes'
            }
          </h4>
          <form onSubmit={modoEdicion ? editarPersonajes : guardarPersonajes}>
            <input type="text"
              className='form-control mb-2'
              placeholder='Ingrese Personaje'
              value={personaje}
              onChange={(e) => setPersonaje(e.target.value)}
            />

            <input type="text"
              className='form-control mb-2'
              placeholder='Ingrese Descripción'
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />

            <input type="text"
              className='form-control mb-2'
              placeholder='Lugar de Origen'
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
            />

            <input type="text"
              className='form-control mb-2'
              placeholder='Ingrese Objeto Insignia'
              value={objetoInsignia}
              onChange={(e) => setObjetoInsignia(e.target.value)}
            />

            <input type="text"
              className='form-control mb-2'
              placeholder='Ingrese Edad del Personaje'
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />

            <input type="text"
              className='form-control mb-2'
              placeholder='Ingrese Rol del Personaje'
              value={rol}
              onChange={(e) => setRol(e.target.value)}
            />

            <input type="text"
              className='form-control mb-2'
              placeholder='Agregue una Nota'
              value={nota}
              onChange={(e) => setNota(e.target.value)}
            />

            {
              modoEdicion ?
                (
                  <>
                    <button
                      className="btn btn-warning btn-block"
                      onClick={() => editarPersonajes(item.id)}>
                      Editar
                    </button>
                    <button className="btn btn-dark btn-block mx-2"
                      onClick={() => cancelar()}>
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