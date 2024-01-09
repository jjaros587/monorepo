import { FC } from 'react'
import './ResumeTimeline.styles2.css'
import { Text, Box, Inline, Stack } from '@ui'
import styled from '@theme'
import { SkillsTags } from '../SkillsTags'

interface ResumeTimelineData {
  title: string
  subtitle: string
  content: string
  date: string
  place: string
  stack?: string[]
}

const Block = styled.div`
  background: blue;
  width: 100%;
  padding: 30px;
`

export const ResumeTimelineItem: FC<ResumeTimelineData> = (props) => {
  const { title, content, subtitle, date, place, stack } = props

  return (
    <li className="timelineItem">
      <Block>
        <span className="date">
          <Text variant="headline1">{title}</Text>
          <Text>{subtitle}</Text>
        </span>

        <Box paddingBottom="S"></Box>
        <Inline align="space-between">
          <span>{date}</span>
          <span>{place}</span>
        </Inline>
        <Text variant="paragraph">{content}</Text>
        {stack && <SkillsTags values={stack} />}
      </Block>
      {/* <div className="cd-timeline-content">
        <Box paddingBottom="S">
          <span className="title">
            <Text variant="headline1">{title}</Text>
          </span>
          <Text>{subtitle}</Text>
        </Box>
        <div className="timeline-content-info">
          <Inline align="space-between">
            <span>{date}</span>
            <span>{place}</span>
          </Inline>
        </div>
        <Text variant="paragraph">{content}</Text>
        {stack && (
          <ul className="content-skills">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div> */}
    </li>
  )
}

interface ResumeTimelineProps<T> {
  title: string
  data: T[]
  mapItemToProps: (itemData: T) => ResumeTimelineData
}

export const ResumeTimeline2 = <T,>({ title, data, mapItemToProps }: ResumeTimelineProps<T>) => {
  return (
    <Stack gap="M">
      <Text variant="headline1">{title}</Text>
      <ul className="timelineContainer">
        {data.map((itemData, index) => (
          <ResumeTimelineItem key={index} {...mapItemToProps(itemData)} />
        ))}
      </ul>
    </Stack>
  )
}
