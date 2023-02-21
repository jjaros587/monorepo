import * as S from './styled'

interface Props {
  checked: boolean
  onClick?: () => void
}

export const Checkbox = ({ checked, onClick }: Props) => {
  return (
    <>
      <S.HiddenCheckbox defaultChecked={checked} />
      <S.StyledCheckbox checked={checked} onClick={onClick}>
        <S.Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </S.Icon>
      </S.StyledCheckbox>
    </>
  )
}
