import React, { useState, useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [proyectos, setProyectos] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      username: email,
      password: password,
    };

    try {
      const response = await fetch('http://127.0.0.1:8001/api/login_check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      localStorage.setItem('token', data.token);
      console.log('Token guardado:', data.token);

      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error en el login:', error);
      // Manejar el error de la API
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isLoggedIn) {
        const token = localStorage.getItem('token');

        try {
          const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            redirect: 'follow',
          };

          const response = await fetch('http://127.0.0.1:8001/api/projdos?page=1', requestOptions);
          const data = await response.json();

          setProyectos(data['hydra:member']);
        } catch (error) {
          console.log('error', error);
        }
      }
    };

    fetchData();
  }, [isLoggedIn]);

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4" style={{ maxWidth: '600px', maxHeight: '600px', overflow: 'auto' }}>
        {!isLoggedIn ? (
          <div>
            <h2 className="text-center mb-4">Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Ingresa tu correo"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Ingresa tu contraseña"
                  className="form-control"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h3 className="text-center mb-4">Mis proyectos</h3>
            {proyectos.length === 0 ? (
              <p className="text-center">No hay proyectos disponibles</p>
            ) : (
              <div className="d-flex flex-wrap justify-content-center">
                {proyectos.map((proyecto) => (
                  <div
                    key={proyecto['@id']}
                    className="card mb-4 me-3"
                    style={{
                      width: '350px',
                      transform: 'rotateY(0deg)',
                      transition: 'transform 0.5s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'rotateY(-10deg)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'rotateY(0deg)';
                    }}
                  >
                    <div className="card-body">
                      <h4>{proyecto.nombre}</h4>
                      <p>{proyecto.descripcion}</p>
                      <a
                        href={proyecto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Ver proyecto
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
