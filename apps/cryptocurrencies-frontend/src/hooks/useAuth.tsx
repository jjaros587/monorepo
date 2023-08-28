import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { LocalStorageService, STORAGE_KEYS } from '../services/LocalStorageService'
import { ServiceContainer } from '../utils'

export interface AuthState {
  accessToken?: string | null
  refreshToken?: string | null
  user?: {
    _id: string
    email: string
  } | null
}

interface AuthContextProps extends AuthState {
  login: (state: AuthState) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>({
  login: () => console.log('You are using AUthContext out of AuthProvider'),
  logout: () => console.log('You are using AUthContext out of AuthProvider'),
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = usePersistedAuth()

  const contextValue = useMemo(() => {
    return {
      accessToken: state?.accessToken || null,
      refreshToken: state?.refreshToken || null,
      user: state?.user || null,
      login: (state: AuthState) => setState(state),
      logout: () => setState(null),
    }
  }, [state, setState])

  useEffect(() => console.log('state value', state), [state])

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

function usePersistedAuth(): [AuthState | null, (newState: AuthState | null) => void] {
  const localStorage = ServiceContainer.get(LocalStorageService)
  const authStorage = localStorage.get<AuthState>(STORAGE_KEYS.AUTH)
  const [state, setStateRaw] = useState<AuthState | null>(authStorage)
  const setState = useCallback((newState: AuthState | null) => {
    setStateRaw(newState)
    if (newState) {
      localStorage.set(STORAGE_KEYS.AUTH, newState)
    } else {
      localStorage.remove(STORAGE_KEYS.AUTH)
    }
  }, [])

  useEffect(() => {
    const handler = () => {
      const currentValue = localStorage.get<AuthState>(STORAGE_KEYS.AUTH)
      if (currentValue !== state) {
        setStateRaw(currentValue)
      }
    }
    document.addEventListener('authStorage', handler)
    return () => {
      document.removeEventListener('authStorage', handler)
    }
  }, [localStorage, state])

  return [state, setState]
}
