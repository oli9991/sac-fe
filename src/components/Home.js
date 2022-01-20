import { Link } from 'react-router-dom';

export const HomeImage = () => {
  const isLogged = localStorage.getItem('logged');

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='809'
      height='756'
      viewBox='0 0 1109 756'
      className='w-100'
    >
      <defs>
        <filter
          id='Rectangle_2'
          x='0'
          y='0'
          width='1109'
          height='756'
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy='3' input='SourceAlpha' />
          <feGaussianBlur stdDeviation='3' result='blur' />
          <feFlood flood-opacity='0.161' />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
      </defs>
      <g id='Group_3' data-name='Group 3' transform='translate(9 6)'>
        <g transform='matrix(1, 0, 0, 1, -9, -6)' filter='url(#Rectangle_2)'>
          <g
            id='Rectangle_2-2'
            data-name='Rectangle 2'
            transform='translate(9 6)'
            fill='#fff'
            stroke='#000'
            stroke-width='1'
          >
            <rect width='1091' height='738' rx='79' stroke='none' />
            <rect
              x='0.5'
              y='0.5'
              width='1090'
              height='737'
              rx='78.5'
              fill='none'
            />
          </g>
        </g>
        <text
          id='Can_t_find_a_good_book_'
          data-name='Can’t find a good book?'
          transform='translate(97 181)'
          font-size='44'
          font-family='Poppins-SemiBold, Poppins'
          font-weight='600'
        >
          <tspan x='0' y='0'>
            Can’t find a good book?
          </tspan>
        </text>
        <text
          id='Using_a_trained_software_we_can_determine_the_best_recommandations_for_you.'
          data-name='Using a trained software we can determine the best recommandations for you.'
          transform='translate(97 295)'
          font-size='29'
          font-family='Poppins-Regular, Poppins'
        >
          <tspan x='0' y='30'>
            Using a trained software we can{' '}
          </tspan>
          <tspan x='0' y='73'>
            determine the{' '}
          </tspan>
          <tspan
            y='73'
            fill='#5800ff'
            font-family='Poppins-Medium, Poppins'
            font-weight='500'
          >
            best
          </tspan>
          <tspan y='73' xmlSpace='preserve'>
            {' '}
            recommandations{' '}
          </tspan>
          <tspan x='0' y='116'>
            for you.
          </tspan>
        </text>
        <g id='Button' transform='translate(97 479)'>
          <g
            id='Path_2'
            data-name='Path 2'
            transform='translate(2.604 3)'
            fill='#ffd0a8'
          >
            <path
              d='M 162.15478515625 57.21444702148438 L 0.5000099539756775 57.21444702148438 L 0.5000099539756775 0.5000113844871521 L 162.15478515625 0.5000113844871521 L 162.15478515625 57.21444702148438 Z'
              stroke='none'
            />
            <path
              d='M 0.9999847412109375 0.9999923706054688 L 0.9999847412109375 56.71442794799805 L 161.6547546386719 56.71442794799805 L 161.6547546386719 0.9999923706054688 L 0.9999847412109375 0.9999923706054688 M -1.52587890625e-05 -7.62939453125e-06 L 162.6547546386719 -7.62939453125e-06 L 162.6547546386719 57.71442794799805 L -1.52587890625e-05 57.71442794799805 L -1.52587890625e-05 -7.62939453125e-06 Z'
              stroke='none'
              fill='#ffd0a8'
            />
          </g>
          <g id='Group_2' data-name='Group 2'>
            <g id='Path_1' data-name='Path 1' fill='#fff'>
              <path
                d='M 161.6934509277344 57.21444702148438 L 0.4999963045120239 57.21444702148438 L 0.4999963045120239 0.5000113844871521 L 161.6934509277344 0.5000113844871521 L 161.6934509277344 57.21444702148438 Z'
                stroke='none'
              />
              <path
                d='M 1 0.9999923706054688 L 1 56.71442794799805 L 161.1934509277344 56.71442794799805 L 161.1934509277344 0.9999923706054688 L 1 0.9999923706054688 M 0 -7.62939453125e-06 L 162.1934509277344 -7.62939453125e-06 L 162.1934509277344 57.71442794799805 L 0 57.71442794799805 L 0 -7.62939453125e-06 Z'
                stroke='none'
                fill='#000'
              />
            </g>
            <text
              id='Find_more'
              data-name='Find more'
              transform='translate(28.597 36.357)'
              font-size='21'
              font-family='Poppins-Regular, Poppins'
            >
              <Link to={isLogged ? '/findBooks' : '/login'}>
                <tspan x='0' y='0'>
                  Find more
                </tspan>
              </Link>
            </text>
          </g>
        </g>
        <circle
          id='Ellipse_1'
          data-name='Ellipse 1'
          cx='5.5'
          cy='5.5'
          r='5.5'
          transform='translate(97 237)'
          fill='#5800ff'
        />
        <circle
          id='Ellipse_2'
          data-name='Ellipse 2'
          cx='5.5'
          cy='5.5'
          r='5.5'
          transform='translate(116 244)'
          fill='#5800ff'
        />
        <circle
          id='Ellipse_3'
          data-name='Ellipse 3'
          cx='5.5'
          cy='5.5'
          r='5.5'
          transform='translate(139 239)'
          fill='#5800ff'
        />
        <circle
          id='Ellipse_4'
          data-name='Ellipse 4'
          cx='5.5'
          cy='5.5'
          r='5.5'
          transform='translate(160 233)'
          fill='#5800ff'
        />
        <circle
          id='Ellipse_5'
          data-name='Ellipse 5'
          cx='5.5'
          cy='5.5'
          r='5.5'
          transform='translate(181 239)'
          fill='#5800ff'
        />
        <path
          id='Icon_ionic-logo-facebook'
          data-name='Icon ionic-logo-facebook'
          d='M20.645,4.5H5.443a.944.944,0,0,0-.943.943v15.2a.944.944,0,0,0,.943.943h7.6V14.824H11V12.332h2.043V10.49a3.246,3.246,0,0,1,3.5-3.409c.943,0,1.958.071,2.194.1V9.488H17.169c-1.072,0-1.277.507-1.277,1.255v1.589h2.554l-.334,2.492H15.892v6.764h4.753a.944.944,0,0,0,.943-.943V5.443A.944.944,0,0,0,20.645,4.5Z'
          transform='translate(99.5 631.5)'
        />
        <g
          id='Icon_ionic-logo-instagram'
          data-name='Icon ionic-logo-instagram'
          transform='translate(141.206 636)'
        >
          <path
            id='Path_257'
            data-name='Path 257'
            d='M16.6,5.924a3.57,3.57,0,0,1,3.56,3.56V16.6a3.57,3.57,0,0,1-3.56,3.56H9.484a3.57,3.57,0,0,1-3.56-3.56V9.484a3.57,3.57,0,0,1,3.56-3.56H16.6m0-1.424H9.484A5,5,0,0,0,4.5,9.484V16.6a5,5,0,0,0,4.984,4.984H16.6A5,5,0,0,0,21.588,16.6V9.484A5,5,0,0,0,16.6,4.5Z'
            transform='translate(-4.5 -4.5)'
          />
          <path
            id='Path_258'
            data-name='Path 258'
            d='M24.693,11.136a1.068,1.068,0,1,1,1.068-1.068A1.065,1.065,0,0,1,24.693,11.136Z'
            transform='translate(-11.521 -6.152)'
          />
          <path
            id='Path_259'
            data-name='Path 259'
            d='M15.522,12.674a2.848,2.848,0,1,1-2.848,2.848,2.851,2.851,0,0,1,2.848-2.848m0-1.424a4.272,4.272,0,1,0,4.272,4.272,4.273,4.273,0,0,0-4.272-4.272Z'
            transform='translate(-6.978 -6.978)'
          />
        </g>
        <path
          id='Icon_ionic-logo-twitter'
          data-name='Icon ionic-logo-twitter'
          d='M22.413,6.525a8.71,8.71,0,0,1-2.474.681,4.323,4.323,0,0,0,1.9-2.385A8.561,8.561,0,0,1,19.1,5.866a4.307,4.307,0,0,0-7.454,2.946,4.218,4.218,0,0,0,.111.983A12.21,12.21,0,0,1,2.873,5.288a4.317,4.317,0,0,0,1.339,5.758,4.208,4.208,0,0,1-1.958-.538v.053a4.312,4.312,0,0,0,3.458,4.227,4.337,4.337,0,0,1-1.135.151,4.065,4.065,0,0,1-.81-.08,4.315,4.315,0,0,0,4.027,2.995A8.638,8.638,0,0,1,2.441,19.7a8.733,8.733,0,0,1-1.028-.062,12.042,12.042,0,0,0,6.595,1.949A12.185,12.185,0,0,0,20.277,9.315c0-.187,0-.374-.013-.556A8.77,8.77,0,0,0,22.413,6.525Z'
          transform='translate(176.656 631.5)'
        />
      </g>
    </svg>
  );
};
