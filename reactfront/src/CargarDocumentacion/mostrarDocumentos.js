import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Archivo from "./Archivos"
import QuitarArchivo from "./QuitarArchivo"
import "bootstrap/dist/css/bootstrap.min.css"
const URI = 'http://localhost:8000/CargarDocumentacion'

const CompMostrarDocumentos = () => {
    const [documentos, setDocumento] = useState([])
    useEffect(() => {
        getDocumentos();
    }, [])

    const getDocumentos = async () => {
        const res = await axios.get(URI)
        setDocumento(res.data)
    }

    const deleteDocumento = async (id) => {


    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Tipo de documento</th>
                                <th>Plantilla</th>
                                <th>Elegir archivo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {documentos.map((documento) =>
                                <tr key={documento.id}>
                                    <td>{documento.Nombre}</td>

                                    <td>
                                        <a href={documento.ruta_archivo}>
                                            {documento.ruta_archivo}
                                        </a>
                                    </td>

                                    <td>
                                        <input type="file" id="myfile" name="myfile"></input>
                                    </td>
                                    <td>
                                        <Archivo></Archivo>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}
export default CompMostrarDocumentos