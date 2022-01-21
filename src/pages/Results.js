import axios from 'axios';
import { useEffect, useState } from 'react';
import { link } from '../variables';
import './../App.scss';
import image from './tess.jpeg';

function Results(props) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get(link + '/result2')
      .then(({ data }) => {
        let proccesed = [];
        Object.entries(data.predictii).forEach(
          (list) =>
            (proccesed = [
              ...proccesed,
              ...list.flat().filter((item) => typeof item !== 'string'),
            ])
        );
        setResults(proccesed);
      })
      .catch(() => {
        console.log('error');
      });
  }, []);
  return (
    <div className='relative w-full flex flex-col overflow-hidden min-h-screen px-80'>
      <h2 className='font-semibold text-2xl pt-10'>
        Am gasit {results.length} carti care s-ar potrivi profilului
        dumneavoastra
      </h2>
      <>
        {results &&
          results.map((result, key) => (
            <div className='w-full flex justify-between  shadow-lg bg-white p-4 my-4 rounded-lg'>
              <div className='flex flex-col justify-center pl-4'>
                <p className='font-semibold text-2xl text-black mb-2'>
                  {result.title}
                </p>
              </div>
              <img src={result.thumbnail} alt={result.title} className='h-40' />
            </div>
          ))}
      </>
    </div>
  );
}

export default Results;
