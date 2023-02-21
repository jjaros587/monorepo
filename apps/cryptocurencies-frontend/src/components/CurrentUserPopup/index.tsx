import * as S from './styled'
import { AppLink, Card, Icon, Inline, Stack } from '@ui'
import { useFlashMessage, useAuth } from '@hooks'
import SCREEN_DESCRIPTORS from 'src/config/ScreenConfig'

export const CurrentUserPopup = () => {
  const { pushMessage } = useFlashMessage()
  const auth = useAuth()

  const handleLogout = () => {
    auth.logout()
    if (auth.user === null) {
      pushMessage('success', 'Logout', 'Successful!')
    } else {
      pushMessage('danger', 'Logout', 'Failed!')
    }
  }

  return (
    <Card>
      <S.CurrentUserEmail>{auth.user!.email}</S.CurrentUserEmail>
      <Stack gap="S">
        <S.CurrentUserItem>
          <AppLink to={SCREEN_DESCRIPTORS.settings.route}>
            <Inline gap="M" alignY="center">
              <Icon name={'userSettings'} />
              <span>Settings</span>
            </Inline>
          </AppLink>
        </S.CurrentUserItem>

        <S.CurrentUserItem
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()

            handleLogout()
          }}
        >
          <Inline gap="M" alignY="center">
            <Icon name={'logout'} />
            <span>Logout</span>
          </Inline>
        </S.CurrentUserItem>
      </Stack>
    </Card>
  )
}

export default CurrentUserPopup
