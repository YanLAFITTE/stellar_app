import {
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
   Route,
} from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route exact path='/'>
         <Route index element={<Home />} />
         <Route path='/nasaphoto' element={<NasaPhoto />} />
      </Route>
   )
);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
