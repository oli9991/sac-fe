import './../App.scss';
import React from 'react';
import { HomeImage } from '../components/Home';
import { Cat } from '../components/Cat';
import { ManOnChair } from '../components/ManOnChair';
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import Chip from '@mui/material/Chip';
import { useEffect, useState } from 'react';
import axios from 'axios';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function AutocompleteInput(props) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  //const [value, setValue] = React.useState('');
  // const [inputValue, setInputValue] = React.useState('');

  const userInput = [];

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    axios
      .get('https://localhost:44392/api/' + props.apiName)
      .then((result) => {
        console.log(result);
        if (active) {
          setOptions([...result.data]);
        }
      })
      .catch((error) => {
        console.log(error);
      })

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  let inputChips = userInput
    .map(data =>
      <Chip label={data.label} variant="outlined" />
    );

  return <div>
    <Autocomplete
      id={props.label}
      sx={{ width: 300 }}

      //value={value}
      onChange={(event, newValue) => {
        console.log("before: " + JSON.stringify(userInput))
        userInput.push({...newValue})
        console.log("after: " + JSON.stringify(userInput))
      }}
      // inputValue={inputValue}
      // onInputChange={(event, newInputValue) => {
      //   console.log("new input value: " + newInputValue)
      //   setInputValue(newInputValue);
      // }}

      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) =>
        option.id === value.id
      }
      getOptionLabel={(option) => {
        if (props.apiName === "books") 
          return option.title
        else
          return option.name
      }}
      options={options}
      loading={loading}
      style={{ width: '100%' }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color='inherit' size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
    {inputChips}
  </div>;
}

function FindBooks(props) {

  return (
    <div className='w-full flex flex-row px-80'>
      <div className='w-1/2 flex items-center min-h-screen md:flex'>
        <ManOnChair />{' '}
      </div>
      <div className='form-container w-full items-center '>
        <h1 className='text-3xl w-full mb-8'>
          Completeaza cu preferatele tale din fiecare categorie
        </h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            window.location.href = '/results';
            // const errors = {};
            // if (!values.email) {
            //   errors.email = 'Acest câmp este obligatoriu';
            // }
            // if (!values.password) {
            //   errors.password = 'Acest câmp este obligatoriu';
            // }
            // if (errors.email || errors.password) {
            //   alert(JSON.stringify(errors));
            //   setSubmitting(false);
            //   return;
            // }
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
                <AutocompleteInput label='Carte' apiName='books'/>
              </div>
              <div className='form-control w-full mt-4'>
                <AutocompleteInput label='Autor' apiName='authors'/>
              </div>
              <div className='form-control w-full mt-4'>
                <AutocompleteInput label='Gen' apiName='categories'/>
              </div>
              <div className='flex space-x-1 w-full mt-8 mb-8'>
                <button type='submit' className='btn btn-primary w-full mr-4'>
                  Vezi rezultate
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FindBooks;

