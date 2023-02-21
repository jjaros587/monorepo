import { apiClient } from '.';
import REFRESH from 'src/graphql/mutations/refresh.graphql';
import { ServiceContainer } from '@utils';
import { LocalStorageService, STORAGE_KEYS } from '@services';
import { AuthState } from '@hooks';
import { Session } from './src/graphql';

export function genNewToken() {
  const localStorage = ServiceContainer.get(LocalStorageService);
  const authState = localStorage.get<AuthState>(STORAGE_KEYS.AUTH);
  return apiClient
    .mutate<{ refreshTokens: Session }>({
      mutation: REFRESH,
      variables: {
        refreshToken: authState?.refreshToken,
      },
    })
    .then(({ data }) => {
      const newState = data?.refreshTokens;
      localStorage.set(STORAGE_KEYS.AUTH, newState);
      return newState?.accessToken;
    })
    .catch((error) => {
      localStorage.set(STORAGE_KEYS.AUTH, null);
    });
}
