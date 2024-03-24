import RootLayout from './shared/component/layout/RootLayout'
import { Route, Routes } from 'react-router-dom';
import {React, lazy, Suspense} from 'react'

//Pages
const SignUpForm = lazy(() => import('./pages/SignUp'));
const Calculator = lazy(() => import('./pages/Calculator'));
const HomePage = lazy(() => import('./pages/Home'))
const UserList = lazy(() => import('./pages/UserList'))


function App() {
  return (
    <RootLayout>
      <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<Calculator />} path="/calcu" />
      <Route element={<SignUpForm />} path="/signup" />
      <Route element={<UserList />} path="/list" />
      </Routes>
    </Suspense>
      
    </RootLayout>
  );
}

export default App;
