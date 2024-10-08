
// import React from 'react';
import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider} from 'react-router-dom';
import MainOrrery from './pages/MainOrrery';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './pages/WelcomePage';
import TeamPage from './pages/TeamPage';
import ExplorePage from './pages/ExplorePage';
import BackgroundSound from './components/BackgroundSound';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);  // Toggle the sidebar open/closed state
  };
  const MemoizedMainOrrery = React.memo(MainOrrery);
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
        <Outlet />
        <BackgroundSound />
      </>
       

    )
  }
  return ( 
    <RouterProvider router={router}/>
  )
  }
 
export default App;
