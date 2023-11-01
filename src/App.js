import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import HomePage from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Services from './pages/Services'
import RootNavlink from './pages/RootNavlink'
import Error from './pages/Error'
import ProductDetails from './pages/ProductDetails'



const router = createBrowserRouter([
  { path: '/', element: <RootNavlink/>, errorElement: <Error/>, children: [
      { path: '/', element: <HomePage/>},
      { path: '/About', element: <About/>},
      { path: '/Services', element: <Services/>},
      { path: '/Products', element: <Products/>},
      { path: '/Products/:productId', element: <ProductDetails/>},
      ]
    },

    // { path: '/Admin', 
    // element: <RootNavlink/>, 
    // children: [
    //   { path: '/Orders', element: <Orders/>},
    //   ]
    // },
    

])



const App = () => {
  return (
    <RouterProvider router={router}/>
     
   
  )
}

export default App
