import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import RegisterPage from './pages/RegisterPage'
import GuestPage from './pages/GuestPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import MainLayout from './layout/MainLayout'
import LoginPage from './pages/LoginPage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<WelcomePage />}/>
        <Route path='/auth/register' element={<RegisterPage />}/>
        <Route path='/auth/login' element={<LoginPage />}/>
        <Route path='/' element={<MainLayout />}>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/guest' element={<GuestPage />}/>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </>
    )
  )
  return <RouterProvider router={router}/>
}

export default App