import { useState } from 'react';
import { Link } from 'react-router-dom';
import './WithoutPermission.css';
import { useWeatherContext } from '../../hooks/useWeatherContext';

const WithoutPermission = () => {
  const [show, setShow] = useState({
    google: false,
    mozilla: false,
    edge: false,
  });
  const { withoutPermissionMessage } = useWeatherContext();

  const handleShowParagraph = (e) => {
    const value = e.target.value;

    if (value === 'google') {
      setShow((prevState) => ({ ...prevState, google: !show.google }));
    }

    if (value === 'mozilla') {
      setShow((prevState) => ({ ...prevState, mozilla: !show.mozilla }));
    }

    if (value === 'edge') {
      setShow((prevState) => ({ ...prevState, edge: !show.edge }));
    }
  };

  return (
    <>
      <div className='without_permission__container'>
        <p className='without_permission__paragraph'>
          {withoutPermissionMessage}
        </p>
      </div>

      <ul className='without_permission__list'>
        <li
          className={`without_permission__list_item ${show.google && 'show'}`}
        >
          <h4>
            En Google Chrome
            <button
              value='google'
              onClick={handleShowParagraph}
              title={show.google ? 'Cerrar' : 'Abrir'}
            >
              <i className={`bx bxs-down-arrow ${show.google && 'show'}`}></i>
            </button>
          </h4>
          <hr />
          <p className='without_permission__list_paragraph'>
            Copia y pega: <b>chrome://settings/content </b> en la barra de
            direcciones si estas en un navegador de escritorio sino seguí las
            instrucciones de este link{' '}
            <a
              href='https://support.google.com/chrome/answer/114662?hl=en&co=GENIE.Platform%3DDesktop'
              target='_blank'
            >
              <b>Google</b>
            </a>
          </p>
        </li>
        <li
          className={`without_permission__list_item ${show.mozilla && 'show'}`}
        >
          <h4>
            En Mozilla Firefox
            <button
              value='mozilla'
              onClick={handleShowParagraph}
              title={show.mozilla ? 'Cerrar' : 'Abrir'}
            >
              <i className={`bx bxs-down-arrow ${show.mozilla && 'show'}`}></i>
            </button>
          </h4>
          <hr />
          <p className='without_permission__list_paragraph'>
            Copia y pega: <b>about:preferences#privacy </b> en la barra de
            direcciones si estas en un navegador de escritorio sino seguí las
            instrucciones de este link{' '}
            <a
              href='https://support.mozilla.org/en-US/kb/site-permissions-panel'
              target='_blank'
            >
              <b>Mozilla</b>
            </a>
          </p>
        </li>
        <li className={`without_permission__list_item ${show.edge && 'show'}`}>
          <h4>
            En Microsoft Edge
            <button
              value='edge'
              onClick={handleShowParagraph}
              title={show.edge ? 'Cerrar' : 'Abrir'}
            >
              <i className={`bx bxs-down-arrow ${show.edge && 'show'}`}></i>
            </button>
          </h4>
          <hr />
          <p className='without_permission__list_paragraph'>
            Copia y pega: <b>edge://settings/content </b> en la barra de
            direcciones si estas en un navegador de escritorio sino seguí las
            instrucciones de este link{' '}
            <a
              href='https://support.microsoft.com/en-us/microsoft-edge/location-and-privacy-in-microsoft-edge-31b5d154-0b1b-90ef-e389-7c7d4ffe7b04#:~:text=You%20can%20also%20allow%20or,or%20Block%20from%20the%20list.'
              target='_blank'
            >
              <b>Microsoft Edge</b>
            </a>
          </p>
        </li>
      </ul>

      <p className='without_permissions__link'>
        O si quieres buscar el clima de diferentes lugares sigue este{' '}
        <Link to={'/search'} title='Pagina de búsqueda'>
          link
        </Link>
      </p>
      <br />
    </>
  );
};

export default WithoutPermission;
