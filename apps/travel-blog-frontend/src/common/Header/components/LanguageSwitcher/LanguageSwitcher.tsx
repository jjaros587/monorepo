import { CountryIcon } from '../../../../../src/components'
import { MenuItem, Menu } from '@mui/material'
import { FC, useState, useCallback } from 'react'

const ICON_SIZE = '24px'

const OPTIONS = ['gb', 'cz']

export const LanguageSwitcher: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedItem, setSelectedItem] = useState('gb')
  const isOpened = Boolean(anchorEl)

  const handleOpen = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const handleClick = useCallback(
    (value: string) => {
      setAnchorEl(null)
      if (value !== selectedItem) {
        setSelectedItem(value)
      }
    },
    [selectedItem],
  )

  return (
    <>
      <CountryIcon code={selectedItem} size={ICON_SIZE} onClick={handleOpen} />
      <Menu open={isOpened} onClose={handleClose} anchorEl={anchorEl}>
        {OPTIONS.map((option, index) => (
          <MenuItem selected={option === selectedItem} key={index}>
            <CountryIcon code={option} size={ICON_SIZE} onClick={() => handleClick(option)} />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
