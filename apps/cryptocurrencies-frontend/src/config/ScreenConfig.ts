import { LoginPage } from '../pages/authentication/Login'
import { PricesPage } from '../pages/app/Prices'
import { DashboardPage } from '../pages/app/Dashboard'
import { PortfolioPage } from '../pages/app/Portfolio'
import { TransactionsPage } from '../pages/app/Transactions'
import { WithdrawalsPage } from '../pages/app/Withdrawals'
import { SignupPage } from '../pages/authentication/Signup'
import { ForgotPasswordPage } from '../pages/authentication/ForgotPassword'
import { Settings } from '../pages/app/Settings'

import { RouteDefinitions, RouteType, ScreenType } from '../app/router/types'
import { LandingPage } from '../pages/LandingPage/LandingPage'

const SCREEN_DESCRIPTORS: {
  public: RouteDefinitions
  protected: RouteDefinitions
  app: RouteDefinitions
} = {
  public: {
    type: RouteType.Public,
    descriptors: {
      landingPage: {
        type: ScreenType.Custom,
        route: '/',
        Component: LandingPage,
      },
    },
  },
  protected: {
    type: RouteType.Protected,
    descriptors: {
      login: {
        type: ScreenType.Custom,
        route: '/login',
        Component: LoginPage,
      },
      signup: {
        type: ScreenType.Custom,
        route: '/signup',
        Component: SignupPage,
      },
      forgotPassword: {
        type: ScreenType.Custom,
        route: '/forgotPassword',
        Component: ForgotPasswordPage,
      },
    },
  },
  app: {
    type: RouteType.Private,
    descriptors: {
      prices: {
        type: ScreenType.Custom,
        route: '/prices',
        Component: PricesPage,
        navigationNode: {
          label: 'Prices',
          icon: 'dollar',
        },
      },

      // Private
      dashboard: {
        type: ScreenType.Custom,
        route: '/dashboard',
        Component: DashboardPage,
        navigationNode: {
          label: 'Dashboard',
          icon: 'chartLine',
        },
      },
      portfolio: {
        type: ScreenType.Custom,
        route: '/portfolio',
        Component: PortfolioPage,
        navigationNode: {
          label: 'Portfolio',
          icon: 'chartPie',
        },
      },
      transactions: {
        type: ScreenType.Custom,
        route: '/transactions',
        // entityName: 'transaction',
        Component: TransactionsPage,
        navigationNode: {
          label: 'Transactions',
          icon: 'transaction',
        },
      },
      withdrawals: {
        type: ScreenType.Custom,
        route: '/withdrawals',
        // entityName: 'withdrawal',
        Component: WithdrawalsPage,
        navigationNode: {
          label: 'Withdrawals',
          icon: 'handHoldingUsd',
        },
      },
      settings: {
        type: ScreenType.Custom,
        route: '/settings',
        Component: Settings,
      },
    },
  },
}

export type PublicRoutes = keyof typeof SCREEN_DESCRIPTORS.public
export type ProtectedRoutes = keyof typeof SCREEN_DESCRIPTORS.protected
export type AppRoutes = keyof typeof SCREEN_DESCRIPTORS.app

export default SCREEN_DESCRIPTORS
