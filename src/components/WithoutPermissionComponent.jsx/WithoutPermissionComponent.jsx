import sunGlassesImg from '../../assets/sun-glasses.png';
import './WithoutPermissionComponent.css';

const WithoutPermissionComponent = () => {
  return (
    <div className='weather__welcome__container'>
      <h2>Bienvenido/a</h2>
      <p>
        Busca la ciudad o el país que quieras para saber como esta ahi afuera
      </p>
      <div>
        <img src={sunGlassesImg} alt='Un sol con anteojos.' />
      </div>
    </div>
  );
};

export default WithoutPermissionComponent;
