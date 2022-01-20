import { Link } from 'react-router-dom';

const Header = () => {
  const isLogged = localStorage.getItem('logged');
  const baseLink = 'font-semibold text-lg no-underline';
  return (
    <div className='w-full flex justify-between items-center h-20 px-80'>
      <Link className={baseLink + ' dark:text-white text-black'} to='/'>
        Cărturarii.
      </Link>
      <div>
        {!isLogged && (
          <Link
            className={baseLink + 'dark:text-white text-black '}
            to='/login'
          >
            Autentificare
          </Link>
        )}
        {!isLogged && (
          <Link
            className={
              baseLink +
              ' dark:bg-white bg-black dark:text-black text-white rounded-md p-2 ml-8'
            }
            to='/register'
          >
            Inregistrare
          </Link>
        )}
        {isLogged && (
          <Link
            className={baseLink + 'dark:text-white text-black '}
            to='/findBooks'
          >
            Gaseste carti
          </Link>
        )}{' '}
        {isLogged && (
          <Link
            className={
              baseLink +
              ' dark:bg-white bg-black dark:text-black text-white rounded-md p-2 ml-8'
            }
            to='/'
            onClick={() => {
              localStorage.removeItem('logged');
              window.location.reload();
              window.location.href = '/';
            }}
          >
            Iesire
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
