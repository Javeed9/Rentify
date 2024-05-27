import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import {Home, Login, Signup, Profile, PropertyList, RentProperty} from './Pages'
import { ProtectedRoute } from './Shared/Hooks';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
      <Route element={<ProtectedRoute />}>
        <Route path="profile" element={<Profile />} />
        <Route path="propertyList" element={<PropertyList />} />
        <Route path="rentproperty" element={<RentProperty />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={Router} />
  </React.StrictMode>,
)
