import { FC, ReactNode, useCallback } from 'react'
import './ResumeTimeline.styles.css'
import { Text, Box, Inline } from '@ui'
import { useDocumentEventListener } from '@hooks'
import { TagsList } from '../TagsList'
import { useMDXComponent } from 'next-contentlayer/hooks'

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

  const MDXContent = useMDXComponent(content)

  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img" />

      <div className="cd-timeline-content">
        <Box paddingBottom="S">
          <Text variant="headline1">{title}</Text>
          <Text>{subtitle}</Text>
        </Box>
        <Box backgroundColor="background" paddingX="S" paddingY="XXS">
          <Inline align="space-between">
            <Text variant="caption">
              <i className="fa fa-calendar-o" /> {date}
            </Text>

            <Text variant="caption">
              <i className="fa fa-location-dot" /> {place}
            </Text>
          </Inline>
        </Box>
        <Text variant="paragraph">
          <MDXContent />
        </Text>
        {stack && <TagsList values={stack} />}
      </div>
    </div>
  )
}

interface ResumeTimelineProps<T> {
  data: T[]
  mapItemToProps: (itemData: T) => ResumeTimelineData
}

export const ResumeTimeline = <T,>({ data, mapItemToProps }: ResumeTimelineProps<T>) => {
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

  useDocumentEventListener('load', run)
  useDocumentEventListener('resize', run)
  useDocumentEventListener('scroll', run)

  return (
    <section id="cd-timeline">
      {data.map((itemData, index) => (
        <ResumeTimelineItem key={index} {...mapItemToProps(itemData)} />
      ))}
    </section>
  )
}
