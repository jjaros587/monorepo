import { FC } from 'react'
import './ResumeTimeline.styles2.css'
import { Text, Box, Inline, Stack } from '@ui'
import styled from '@theme'
import { SkillsTags } from '../SkillsTags'
import './ResumeTimeline.styles3.scss'

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

export const ResumeTimeline3 = () => {
  return (
    <>
      <section id="timeline">
        <div className="demo-card-wrapper">
          <div className="demo-card demo-card--step1">
            <div className="head">
              <div className="number-box">
                <span>01</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Technology
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt
                doloribus consequatur, laudantium odio dolorum laboriosam.
              </p>
              <img src="http://placehold.it/5000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step2">
            <div className="head">
              <div className="number-box">
                <span>02</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Confidence
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt
                doloribus consequatur, laudantium odio dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step3">
            <div className="head">
              <div className="number-box">
                <span>03</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Adaptation
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt
                doloribus consequatur, laudantium odio dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step4">
            <div className="head">
              <div className="number-box">
                <span>04</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Consistency
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt
                doloribus consequatur, laudantium odio dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step5">
            <div className="head">
              <div className="number-box">
                <span>05</span>
              </div>
              <h2>
                <span v="small">Subtitle</span> Conversion
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt
                doloribus consequatur, laudantium odio dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
        </div>
      </section>
    </>
  )

  {
    /* return (
    <Stack gap="M">
      <Text variant="headline1">{title}</Text>
      <ul className="timelineContainer">
        {data.map((itemData, index) => (
          <ResumeTimelineItem key={index} {...mapItemToProps(itemData)} />
        ))}
      </ul>
    </Stack>
  ) */
  }
}
