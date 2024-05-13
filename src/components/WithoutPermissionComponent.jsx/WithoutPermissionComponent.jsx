import './WithoutPermissionComponent.css';

const WithoutPermissionComponent = () => {
  return (
    <div className='weather__welcome__container'>
      <h2>Bienvenido/a</h2>
      <p>
        Busca la ciudad o el país que quieras para saber como esta ahi afuera
      </p>
      <div>
        <img src='/src/assets/sun-glasses.png' alt='Un sol con anteojos.' />
      </div>
    </div>
  );
};

export default WithoutPermissionComponent;
