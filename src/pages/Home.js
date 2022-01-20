import './../App.scss';

import { HomeImage } from '../components/Home';
import { Cat } from '../components/Cat';

function Home(props) {
  /* daca e register sau nu bool */

  return (
    <div className='relative w-full flex flex-col overflow-hidden min-h-screen'>
      <div className='mt-40 w-1/2 px-80 z-10'>
        <HomeImage />
        <div className='z-0 absolute right-80 top-20'>
          <Cat />
        </div>
      </div>
      <div className='z-0 bottom-0 absolute w-full bg-indigo-400 h-80'></div>
    </div>
  );
}

export default Home;
