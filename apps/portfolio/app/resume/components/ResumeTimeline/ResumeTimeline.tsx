import { FC, useCallback } from 'react'
import './ResumeTimeline.styles.css'
import { Text, Box, Inline, Stack } from '@ui'
import { useEventListener } from '@hooks'

interface ResumeTimelineData {
  title: string
  subtitle: string
  content: string
  date: string
  place: string
  stack?: string[]
}

export const ResumeTimelineItem: FC<ResumeTimelineData> = (props) => {
  const { title, content, subtitle, date, place, stack } = props

  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img" />

      <div className="cd-timeline-content">
        <Box paddingBottom="S">
          <Text variant="headline1">{title}</Text>
          <Text>{subtitle}</Text>
        </Box>
        <div className="timeline-content-info">
          <Inline align="space-between">
            <span>
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              {date}
            </span>

            <span>
              <i className="fa fa-certificate" aria-hidden="true"></i>
              {place}
            </span>
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
      </div>
    </div>
  )
}

interface ResumeTimelineProps<T> {
  title: string
  data: T[]
  mapItemToProps: (itemData: T) => ResumeTimelineData
}

export const ResumeTimeline = <T,>({ title, data, mapItemToProps }: ResumeTimelineProps<T>) => {
  const run = useCallback(() => {
    const isInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
    const items = document.getElementsByClassName('cd-timeline-block')
    Array.from(items).forEach((item) => {
      if (isInViewport(item)) {
        item.classList.add('show')
      }
    })
  }, [])

  window.addEventListener('load', run)
  useEventListener('resize', run)
  useEventListener('scroll', run)

  return (
    <Stack gap="M">
      <Text variant="headline1">{title}</Text>
      <section id="cd-timeline">
        {data.map((itemData, index) => (
          <ResumeTimelineItem key={index} {...mapItemToProps(itemData)} />
        ))}
      </section>
    </Stack>
  )
}
