import { StrictMode } from 'react';
import React from 'react';
import App from './app/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './ui-theme';
import { BrowserRouter } from 'react-router-dom';
import {
  AuthProvider,
  SidebarProvider,
  BulkPanelContextProvider,
  FlashMessageProvider,
  ModalContextProvider,
} from '@hooks';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { APIProvider } from './api';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Providers: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AuthProvider>
        <APIProvider>
          <ModalContextProvider>
            <BulkPanelContextProvider>
              <SidebarProvider>
                <ThemeProvider theme={theme}>
                  <FlashMessageProvider>{children}</FlashMessageProvider>
                </ThemeProvider>
              </SidebarProvider>
            </BulkPanelContextProvider>
          </ModalContextProvider>
        </APIProvider>
      </AuthProvider>
    </MuiPickersUtilsProvider>
  );
};

root.render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </StrictMode>
);
