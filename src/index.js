import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react'
import theme from "./theme";
import {SWRConfig} from 'swr';
import {fetcher} from "./fetcher";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SWRConfig value={{fetcher}}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App/>
        </ChakraProvider>
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>
)
;
