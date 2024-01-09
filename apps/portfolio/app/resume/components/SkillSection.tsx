import { ReactFCWithChildren, Text, Stack } from '@ui'

interface Props {
  title: string
}

export const SkillSection: ReactFCWithChildren<Props> = ({ title, children }) => {
  return (
    <Stack gap="S">
      <div>
        <Text variant="headline2">{title}</Text>
      </div>
      <div>{children}</div>
    </Stack>
  )
}
