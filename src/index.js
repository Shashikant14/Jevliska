import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {Body} from './App';
import About from './components/About';
import Contact from './components/Contact';
import reportWebVitals from './reportWebVitals';
import Error from './components/Error';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RestaurantMenu from './components/RestauratMenu';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/About",
        element: <About />
      },{
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/Restaurants/:resId",
        element:<RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
