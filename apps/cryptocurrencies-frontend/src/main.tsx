import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { APIProvider } from './api/ApiClient'
import {
  AuthProvider,
  BulkPanelContextProvider,
  FlashMessageProvider,
  ModalContextProvider,
} from './hooks'
import { ThemeProvider, theme } from '@theme'
import { Routes } from './app/router/Routes'
import { ErrorHandler } from './app/ErrorHandler'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AuthProvider>
        <APIProvider>
          <ModalContextProvider>
            <BulkPanelContextProvider>
              <ThemeProvider theme={theme}>
                <FlashMessageProvider>
                  <ErrorHandler>{children}</ErrorHandler>
                </FlashMessageProvider>
              </ThemeProvider>
            </BulkPanelContextProvider>
          </ModalContextProvider>
        </APIProvider>
      </AuthProvider>
    </MuiPickersUtilsProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
        <Routes />
      </Providers>
    </BrowserRouter>
  </StrictMode>,
)
