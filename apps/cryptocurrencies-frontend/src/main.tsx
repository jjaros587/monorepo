import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/App'
import { APIProvider } from './api'
import {
  AuthProvider,
  BulkPanelContextProvider,
  FlashMessageProvider,
  ModalContextProvider,
  SidebarProvider,
} from './hooks'
import { ThemeProvider, theme } from '@theme'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </StrictMode>,
)
