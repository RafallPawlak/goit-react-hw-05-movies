import { Routes, Route} from "react-router-dom";
import { lazy } from 'react';

import { SharedLayout } from './SharedLayouts/SharedLayouts';


const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/Movies/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('../pages/Movies/Cast/Cast'));
// const Reviews = lazy(() => import('../pages/Movies/Reviews/Reviews'));
// const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {

  return (
   <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            
          </Route>
      </Route>
    </Routes>
  </>
  );
};

//  <Route path="movies" element={<Movies />} />
//         <Route path="movies/:movieId" element={<MovieDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="*" element={<NotFound />} />


// import { fetchMovie }  from "../api/fetchApi";

// export const App = () => {

//   const logConsole = () => {
//     console.log(fetchMovie(`/trending/movie/day`));
//   }

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <button onClick={logConsole}>FetchApi</button>
//       React homework template
//     </div>
//   );
// };