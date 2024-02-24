import Grid from '@mui/material/Grid'
import { Box, Text } from '@ui'
import { FC } from 'react'
import styled from '@theme'
import { Card } from '../../../src/components/Card'
import { RESUME_DATA } from '../../../assets/data/resume'

interface Props {
  iconName: string
  title: string
  content: string
}

const IconBox = styled(Box)`
  width: 60px;
  height: 60px;

  background-color: var(--colors-background);
`

const StrenghtsCard: FC<Props> = ({ iconName, title, content }) => {
  return (
    <Card fullHeight>
      <Box align="center">
        <IconBox align="center" alignY="center">
          <i className={`fa-solid fa-${iconName} fa-2xl`} />
        </IconBox>
        <Box paddingY="M">
          <Text variant="headline2" color="light">
            {title}
          </Text>
        </Box>
        <Text variant="paragraph">{content}</Text>
      </Box>
    </Card>
  )
}

export const Strenghts = () => {
  return (
    <Grid container spacing={4}>
      {RESUME_DATA.strenghts.map((strenght, index) => (
        <Grid item key={index} xs={12} md={6}>
          <StrenghtsCard
            title={strenght.title}
            iconName={strenght.iconName}
            content={strenght.text}
          />
        </Grid>
      ))}
    </Grid>
  )
}
