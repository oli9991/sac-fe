import './../App.scss';
import { Formik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ManOnChair } from '../components/ManOnChair';

function Login(props) {
  /* daca e register sau nu bool */
  const { register } = props;

  return (
    <div className='w-full flex flex-row px-80'>
      <div className='w-1/2 flex items-center min-h-screen md:flex'>
        <ManOnChair />{' '}
      </div>
      <div className='form-container w-full items-center '>
        <h1 className='text-3xl w-full mb-8'>
          {register ? 'Inregistrare' : 'Autentificare'}
        </h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Acest câmp este obligatoriu';
            }
            if (!values.password) {
              errors.password = 'Acest câmp este obligatoriu';
            }

            if (errors.email || errors.password) {
              alert(JSON.stringify(errors));
              setSubmitting(false);
              return;
            }

            if (!register) {
              localStorage.setItem('logged', true);
              window.location.href = '/';
            } else {
              window.location.href = '/login';
            }

            // axios
            //   .post('http://localhost:3003/api/login', {
            //     ...values,
            //   })
            //   .then(() => {
            //     setSubmitting(false);
            //   })
            //   .catch(() => {
            //     console.log('error');
            //     setSubmitting(false);
            //   });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            submitForm,
            /* and other goodies */
          }) => (
            <form className='w-full mb-1' onSubmit={handleSubmit}>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Email *</span>
                </label>
                <input
                  type='text'
                  placeholder='eg email@gmail.com'
                  className='input input-bordered'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name='email'
                />
              </div>
              <div className='form-control w-full mt-4'>
                <label className='label'>
                  <span className='label-text'>Parola *</span>
                </label>
                <input
                  type='text'
                  placeholder='eg polilife=nolife'
                  className='input input-bordered'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name='password'
                />
              </div>
              <div className='flex space-x-1 w-full mt-8 mb-8'>
                <button
                  type='submit'
                  className='btn btn-primary w-full mr-4'
                  disabled={isSubmitting}
                >
                  {register ? 'Inregistrare' : 'Autentificare'}
                </button>
              </div>
              {!register && (
                <Link
                  className='text-normal text-sm dark:text-white text-black'
                  to='/register'
                >
                  Nu aveti un cont?
                </Link>
              )}
              {register && (
                <Link
                  className='text-normal text-sm dark:text-white text-black'
                  to='/login'
                >
                  Aveti un cont?
                </Link>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
