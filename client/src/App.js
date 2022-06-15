import './App.css';

import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from './routes/index.js';

function App() {
  return (
    <>

      <Routes>
        
        {/* Home page */}
        {publicRoutes.map( (route, index) =>{

          const Page = route.component;

          return(
            <Route key={index} path={route.patch} element={<Page />} />
          )

        })}

        {/* Admin page */}
        {privateRoutes.map( (route, index) =>{

        const Page = route.component;

        return(
          <Route key={index} path={route.patch} element={<Page />} />
        )

        })}
        
      </Routes>

    </>
  );
}

export default App;
