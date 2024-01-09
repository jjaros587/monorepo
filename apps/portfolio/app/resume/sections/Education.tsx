import { Inline, Stack, Text } from '@ui'
import { ResumeSection } from '../components/ResumeSection'
import { ResumeSectionItem } from '../components/ResumeSectionItem'
import { RESUME_DATA } from '../data'

export const Education = () => {
  return (
    <ResumeSection title="Education" id="education">
      {RESUME_DATA.education.map(({ date, place, degree, main, side, thesis }, index) => (
        <ResumeSectionItem
          key={index}
          left={
            <Inline align="space-between">
              <Text>{place}</Text>
              <Text>{date}</Text>
            </Inline>
          }
          right={
            <Stack>
              <Text variant="headline2">{degree}</Text>

              <Text>
                <table>
                  <tr>
                    <td>Main:</td>
                    <td>{main}</td>
                  </tr>
                  {side ? (
                    <tr>
                      <td>Side:</td>
                      <td>{side}</td>
                    </tr>
                  ) : null}
                  {thesis ? (
                    <tr>
                      <td>Thesis:</td>
                      <td>
                        <a href={thesis.link}>{thesis.label}</a>
                      </td>
                    </tr>
                  ) : null}
                </table>
              </Text>
              {/* <Text>Main: {main}</Text>
              {side ? <Text>Side: {side}</Text> : null}
              {thesis ? (
                <Text>
                  Thesis:
                  <a href={thesis.link}>{thesis.label}</a>
                </Text>
              ) : null} */}
            </Stack>
          }
        />
      ))}
    </ResumeSection>
  )
}
