'use client'

import { PageSection } from '../../src/components/PageSection'
import { Page } from '../../src/components/Page'
import { Stack, Inline, Text, Tooltip } from '@ui'
import { Card } from '../../src/components/Card'
import styled from '@theme'
import Image from 'next/image'
import { ReactNode } from 'react'
import { IconLink } from '../../src/components/Navigation/components/IconLink'

const Container = styled.div`
  display: flex;
  flex-direction: row;

  .left {
    position: relative;
    width: 350px;
    /* margin: auto; */
  }

  .right {
    flex: 1;
    ${(p) => p.theme.margin(0, 0, 0, 'L')}
  }

  @media only screen and (max-width: 1170px) {
    flex-direction: column;

    .left {
      width: 100%;
    }

    .right {
      flex: none;
      ${(p) => p.theme.margin('L', 0, 0, 0)}
    }
  }
`

const ProjectCard = ({ title, tooltips }: { title: string; tooltips: ReactNode }) => {
  return (
    <Card>
      <Container>
        <div className="left">
          <Image src="/portrait.jpeg" alt="portrait" width="350" height="200" layout="responsive" />
        </div>

        <div className="right">
          <Stack gap="M">
            <Inline align="space-between">
              <Text variant="headline2">{title}</Text>

              {tooltips}
            </Inline>

            <Text variant="paragraph">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat
              eget, tristique non, venenatis quis, ante. Aenean id metus id velit ullamcorper
              pulvinar. Duis risus. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Nullam at arcu a est sollicitudin
              euismod. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Fusce consectetuer risus a nunc. Phasellus
              rhoncus. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Aliquam erat volutpat. Mauris elementum mauris vitae
              tortor. Sed ac dolor sit amet purus malesuada congue. Donec vitae arcu. Quisque porta.
              Fusce consectetuer risus a nunc. Integer malesuada. Nullam justo enim, consectetuer
              nec, ullamcorper ac, vestibulum in, elit. Mauris suscipit, ligula sit amet pharetra
              semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. In dapibus augue non sapien. Maecenas sollicitudin. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Etiam dictum tincidunt diam. Fusce tellus. Cras
              elementum. Aenean vel massa quis mauris vehicula lacinia. Pellentesque ipsum. Etiam
              bibendum elit eget erat. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin
              et, dolor. Maecenas lorem. Sed convallis magna eu sem. Etiam dictum tincidunt diam.
              Duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur? Phasellus et lorem id felis nonummy placerat.
            </Text>
          </Stack>
        </div>
      </Container>
    </Card>
  )
}

const Icon = ({ link }: { link: string }) => {
  return <IconLink iconName="github" link={link} inverted />
}

export default function ProjectsPage() {
  return (
    <Page title="My projects">
      <PageSection title="List of projects">
        <Stack gap="L">
          <ProjectCard
            title="Travel blog"
            tooltips={
              <Icon link="https://github.com/jjaros587/monorepo/tree/main/apps/travel-blog-frontend" />
            }
          />
          <ProjectCard
            title="Cryptocurrencies management app"
            tooltips={
              <Inline gap="S">
                <Tooltip tooltip="Frontend">
                  <Icon link="https://github.com/jjaros587/monorepo/tree/main/apps/cryptocurrencies-frontend" />
                </Tooltip>
                <Tooltip tooltip="Backend">
                  <Icon link="https://github.com/jjaros587/monorepo/tree/main/apps/cryptocurrencies-backend" />
                </Tooltip>
              </Inline>
            }
          />
        </Stack>
      </PageSection>
    </Page>
  )
}
