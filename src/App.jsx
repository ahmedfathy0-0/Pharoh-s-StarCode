
// import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider} from 'react-router-dom';
// import MainOrrery from './pages/mainorrery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Ebook from './pages/Ebook';
const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
        {/* <Route index element={<Ebook/>}/> */}
        {/* <Route path='/solar' element={<MainOrrery/>}/> */}
        </Route>
        )
  )
  function Layout(){
    return(
        <>
        <Outlet/>
        </>
    )
  }
  return ( 
    <RouterProvider router={router}/>
  )
  }
 
export default App;
