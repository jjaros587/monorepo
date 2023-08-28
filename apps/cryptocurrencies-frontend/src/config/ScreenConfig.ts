import { LoginPage } from '../pages/authentication/Login'
import { PricesPage } from '../pages/app/Prices'
import { DashboardPage } from '../pages/app/Dashboard'
import { PortfolioPage } from '../pages/app/Portfolio'
import { TransactionsPage } from '../pages/app/Transactions'
import { WithdrawalsPage } from '../pages/app/Withdrawals'
import { SignupPage } from '../pages/authentication/Signup'
// import { ForgotPasswordPage } from '../pages/authentication/ForgotPassword'
import { Settings } from '../pages/app/Settings'

import { ScreenDescriptor, ScreenType, RouteType } from '../app/router/ScreenDescriptor'

const SCREEN_DESCRIPTORS: { [key: string]: ScreenDescriptor } = {
  // Public
  prices: {
    type: ScreenType.Custom,
    routeType: RouteType.Public,
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
    routeType: RouteType.Private,
    route: '/dashboard',
    Component: DashboardPage,
    navigationNode: {
      label: 'Dashboard',
      icon: 'chartLine',
    },
  },
  portfolio: {
    type: ScreenType.Custom,
    routeType: RouteType.Private,
    route: '/portfolio',
    Component: PortfolioPage,
    navigationNode: {
      label: 'Portfolio',
      icon: 'chartPie',
    },
  },
  transactions: {
    type: ScreenType.Custom,
    routeType: RouteType.Private,
    route: '/transactions',
    // entityName: 'transaction',
    Component: TransactionsPage,
    navigationNode: {
      label: 'Transactions',
      icon: 'user',
    },
  },
  withdrawals: {
    type: ScreenType.Custom,
    routeType: RouteType.Private,
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
    routeType: RouteType.Private,
    route: '/settings',
    Component: Settings,
  },
  // Protected
  login: {
    type: ScreenType.Custom,
    routeType: RouteType.Protected,
    route: '/login',
    Component: LoginPage,
  },
  signup: {
    type: ScreenType.Custom,
    routeType: RouteType.Public,
    route: '/signup',
    Component: SignupPage,
  },
  // forgotPassword: {
  //   type: ScreenType.Custom,
  //   routeType: RouteType.Protected,
  //   route: '/forgotPassword',
  //   Component: ForgotPasswordPage,
  // },
}

export default SCREEN_DESCRIPTORS
