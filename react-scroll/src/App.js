import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Navbar from './components/Navbar/Navbar'
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector((state) => state.auth)

  return (
    <div>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              theme: {
                primary: '#4aee88',
              },
            },
          }}
        />
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          {
            auth._id ? (
              <Route path='/' element={<Dashboard />}>
                <Route index element={<Home />} />
              </Route>
            ) : (
              <>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Registration />} />

              </>
            )
          }

          {
            !auth._id && <>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Registration />} />

            </>
          }

          {/* {
            !auth._id && <>
              <Navigate to="/login" replace={<Login/>}/>
            </>
          } */}


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
