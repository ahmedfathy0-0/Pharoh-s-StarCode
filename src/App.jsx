
// import React from 'react';
import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider} from 'react-router-dom';
import MainOrrery from './pages/mainorrery';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ebook from './pages/Ebook';
const App = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);  // Toggle the sidebar open/closed state
  };
  const MemoizedMainOrrery = React.memo(MainOrrery);
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Ebook/>}/>
        <Route path='/solar' element={<MainOrrery/>}/>
        </Route>
        )
  )
  function Layout(){
    return(
      <div className="app-layout">
      {/* Sidebar component with open/close state */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <div className={`content ${isOpen ? 'shifted' : ''}`}>
        <Outlet />
      </div>
    </div>
    )
  }
  return ( 
    <RouterProvider router={router}/>
  )
  }
 
export default App;
