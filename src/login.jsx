import React from 'react';
import './App.css'; // Importar estilos

function login() {
    let username = '';
    let password = '';

    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar que la página se recargue
        console.log('Nombre de usuario:', username);
        console.log('Contraseña:', password);
        // Aquí puedes agregar la lógica para autenticar al usuario
    };
    
    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input 
                        type="text" 
                        id="username" 
                        onChange={(e) => username = e.target.value} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input 
                        type="password" 
                        id="password" 
                        onChange={(e) => password = e.target.value} 
                        required 
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default login; // Exportar el componente