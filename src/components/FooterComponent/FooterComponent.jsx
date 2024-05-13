import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <section className='footer__component'>
      <div className='footer__component__socials__container'>
        <h4>Braian.G Dev</h4>
        <ul>
          <li>
            <a
              href='https://github.com/BraianAdrianGil'
              className='github'
              aria-label='Visita mi perfil de Github'
              target='_blank'
            >
              <i className='bx bxl-github'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/braian-adrian-gagliardo-gil-a10042266/'
              className='linkedin'
              aria-label='Visita mi perfil de LinkedIn'
              target='_blank'
            >
              <i className='bx bxl-linkedin-square'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/braianadrian95/?next=%2F'
              className='instagram'
              aria-label='Visita mi perfil de Instagram'
              target='_blank'
            >
              <i className='bx bxl-instagram'></i>
            </a>
          </li>
        </ul>
      </div>
      <p className='footer__component__contact__links__container'>
        <a
          href='mailto:braian.adrian.gagliardo@gmail.com'
          aria-label='Abrir correo y mandar mensaje directamente'
        >
          braian.adrian.gagliardo@gmail.com
        </a>
        <span> | </span>
        <a
          href='https://api.whatsapp.com/send?phone=+598098604405&text=Hi'
          aria-label='Abrir WhatsApp y mandar mensaje directamente'
        >
          +598098604405
        </a>
      </p>
    </section>
  );
};

export default FooterComponent;
