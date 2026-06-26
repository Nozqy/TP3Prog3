const { useState } = React;

function App() {
    const [personas, setPersonas] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '', apellido: '', edad: '', altura: '', peso: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const alturaNum = parseFloat(formData.altura);
        const pesoNum = parseFloat(formData.peso);
        const imcCalculado = (pesoNum / (alturaNum * alturaNum)).toFixed(2);

        const nuevaPersona = {
            ...formData,
            id: Date.now(),
            imc: imcCalculado
        };

        setPersonas([...personas, nuevaPersona]);
        setFormData({ nombre: '', apellido: '', edad: '', altura: '', peso: '' });
    };

    const eliminarPersona = (id) => {
        setPersonas(personas.filter(p => p.id !== id));
    };

    return (
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <section className="panel-formulario">
                <h2>Nuevo Paciente</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grupo-input">
                        <label>Nombre:</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    </div>
                    <div className="grupo-input">
                        <label>Apellido:</label>
                        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
                    </div>
                    <div className="grupo-input">
                        <label>Edad:</label>
                        <input type="number" name="edad" value={formData.edad} onChange={handleChange} required />
                    </div>
                    <div className="grupo-input">
                        <label>Altura (m):</label>
                        <input type="number" step="0.01" name="altura" value={formData.altura} onChange={handleChange} required />
                    </div>
                    <div className="grupo-input">
                        <label>Peso (kg):</label>
                        <input type="number" step="0.1" name="peso" value={formData.peso} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn-agregar">Agregar con React</button>
                </form>
            </section>

            <section className="panel-tabla">
                <h2>Listado Actual</h2>
                <table className="tabla-personas">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Altura</th>
                            <th>Peso</th>
                            <th>IMC</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personas.map((p) => (
                            <tr key={p.id}>
                                <td>{p.nombre}</td>
                                <td>{p.apellido}</td>
                                <td>{p.edad}</td>
                                <td>{p.altura}</td>
                                <td>{p.peso}</td>
                                <td><strong>{p.imc}</strong></td>
                                <td>
                                    <button className="btn-eliminar" onClick={() => eliminarPersona(p.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {personas.length === 0 && <p style={{textAlign:'center', marginTop:'10px', color:'#ccc'}}>No hay pacientes registrados.</p>}
            </section>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<App />);