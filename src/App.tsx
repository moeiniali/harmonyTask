import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import { TmMainLayout } from './components/ExAllCo';

import { Router, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <TmMainLayout />,


  },
  {
    path: "/riple",
    element: (<>
      <p>riple</p>
    </>),


  },
]);

function App() {
  return (
    <div className="w-full min-h-screen bg-[#02161D]">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
