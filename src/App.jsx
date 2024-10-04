
// import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider} from 'react-router-dom';
import MainOrrery from './pages/MainOrrery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './pages/WelcomePage';
import TeamPage from './pages/TeamPage';
import ExplorePage from './pages/ExplorePage';

const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
          <Route path="/solar" element={<MainOrrery />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/explore" element={<ExplorePage />} />
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
