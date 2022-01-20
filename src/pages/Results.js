import './../App.scss';

import { HomeImage } from '../components/Home';
import { Cat } from '../components/Cat';
import image from './tess.jpeg';

function Results(props) {
  const results = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
  ];

  return (
    <div className='relative w-full flex flex-col overflow-hidden min-h-screen px-80'>
      <h2 className='font-semibold text-2xl pt-10'>
        Am gasit {results.length} carti care s-ar potrivi profilului
        dumneavoastra.
      </h2>
      <>
        {results &&
          results.map((result, key) => (
            <div className='w-full flex justify-between  shadow-lg bg-white p-4 my-4 rounded-lg'>
              <div className='flex flex-col justify-center pl-4'>
                <p className='font-semibold text-black mb-2'>{result.title}</p>
                <p className='font-normal text-black'>Author</p>
                <p className='font-normal text-black'>Alte date</p>
                <p className='font-normal text-black'>Alte date</p>
              </div>
              <img src={image} alt={result.title} className='h-40' />
            </div>
          ))}
      </>
    </div>
  );
}

export default Results;
