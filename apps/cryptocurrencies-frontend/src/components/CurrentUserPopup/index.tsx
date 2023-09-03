import * as S from './styled'
import { AppLink } from '../../ui-kit'
import { useFlashMessage, useAuth } from '../../hooks'
import SCREEN_DESCRIPTORS from '../../config/ScreenConfig'
import { Card, Inline, Stack } from '@ui'
import { Icon } from '@icons'
import { useNavigate } from 'react-router-dom'

export const CurrentUserPopup = () => {
  const { pushMessage } = useFlashMessage()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    pushMessage('success', 'Logout', 'Successful!')
    navigate('/')
  }

  return (
    <Card>
      <S.CurrentUserEmail>{user!.email}</S.CurrentUserEmail>
      <Stack gap="S">
        <S.CurrentUserItem>
          <AppLink to={SCREEN_DESCRIPTORS.app.descriptors['settings'].route}>
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
