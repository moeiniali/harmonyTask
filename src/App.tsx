import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import { Suspense } from 'react';
import { TmMainLayout } from './components/ExAllCo';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#02161D]">
      <Provider store={store}>

        <TmMainLayout />

      </Provider>
    </div>
  );
}

export default App;
