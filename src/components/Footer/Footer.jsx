import './Footer.css';

export const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__name'>
            <h3 className='footer__heading'>Eagle Stores</h3>
            <p>
              Eagle Stores one-stop Electronics destination for anything and
              everything you need to look good.
            </p>
          </div>
          <div className='footer__contact'>
            <li className='footer__list'>
              <i className='footer__icon fas fa-home'></i>Hyderabad, Telangana
            </li>
            <li className='footer__list'>
              <i className='footer__icon fas fa-envelope'></i>
              eaglestores123@gmail.com
            </li>
          </div>
          <div className='footer__social'>
            <a
              href='https://github.com/Hittitech/Eagle-store'
              className='footer__list'
            >
              <i className='footer__icon fab fa-github'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/md-adnan-sami/'
              className='footer__list '
            >
              <i class='footer__icon fab fa-linkedin'></i>
            </a>
            <a
              href='https://twitter.com/adnan9381'
              className='footer__list '
            >
              <i className='footer__icon fab fa-twitter'></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
