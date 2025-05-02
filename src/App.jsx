import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import RegisterPage from './pages/RegisterPage'
import GuestPage from './pages/GuestPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import MainLayout from './layout/MainLayout'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<WelcomePage />} />
        <Route path='/auth/register' element={<RegisterPage />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />

        <Route path='/' element={<MainLayout />}>
          <Route path='/home' element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } />
          <Route path='/guest' element={<GuestPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </>
    )
  )
  return <RouterProvider router={router}/>
}

export default App