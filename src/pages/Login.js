import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/LoginContext';

export default function Login() {
  const { xablau } = useContext(LoginContext);
  const { toggleTheme } = useContext(LoginContext);

  const history = useHistory();
  const [login, setLogin] = useState({ value: '' });
  const [load, setLoad] = useState(false);
  const [disabled, setDisabled] = useState(true);
  // const [sessionTimeout, setSessionTimeout] = useState(false);

  const handleChange = event => {
    setLogin({ value: event.target.value });
  };
    
  useEffect(() => {
    const LETTER = 2;
    if (login.value.length <= LETTER) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [login]);
    
  const validationButton = () => {
    setLoad(true);
    if (login.value.length > 2) {
      history.push(`/galeria`);
    }
  };

  return (
    <form>
  <div className="container">
    {load ? (
      <p className='loading'>Loading...</p>
    ) : (
      <input
        className="login"
        placeholder="Digite o seu nome aqui"
        name="login"
        type="text"
        onChange={handleChange}
        value={login.value}
       
      />
    )}
    <div className="darkmode">
      <button
        onClick={() => {
          setLoad(false);
          toggleTheme();
        }}
        type="button"
      >
        {xablau === "dark" ? "🌞" : "🌒"}
      </button>
    </div>
    <button
      className="login cs"
      disabled={disabled}
      onClick={validationButton}
      type="button"
    >
      Entrar
    </button>
  </div>
</form>
  );
}
