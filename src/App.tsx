import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import { TmMainLayout } from './components/ExAllCo';
import { ConfigProvider } from 'antd';
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

      <ConfigProvider theme={{
        token: {
        },
        components: {

          Input: {
            colorBorder: '#F2B80C', colorBgContainer: '#151515', colorTextPlaceholder: "#fff", colorPrimaryText: '#fff', colorText: '#F2B80C',
            colorPrimary: '#02161D', activeBorderColor: '#F2B80C', controlHeight: 40, hoverBorderColor: '#AA7F00'
          },
          Button: { colorPrimary: '#F50148', colorPrimaryHover: '#B00033' ,  colorPrimaryActive: '#B00033' }
        }
      }}>

        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ConfigProvider>
    </div>
  );
}

export default App;
