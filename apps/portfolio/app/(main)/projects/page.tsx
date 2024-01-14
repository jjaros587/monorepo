'use client'

import { PageSection } from '../../../src/components/PageSection'
import { Page } from '../../../src/components/Page'
import { Stack, Inline, Box, Text } from '@ui'
import { Card } from '../../../src/components/Card'
import styled from '@theme'
import Grid from '@mui/material/Grid'

const Pic = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  background: green;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;

  .left {
    position: relative;
    width: 350px;
    height: 200px;
  }

  .right {
    flex: 1;
  }

  @media only screen and (max-width: 1170px) {
    flex-direction: column;

    .left {
      width: 100%;
      height: calc(200px / 350px * 100%);
    }

    .right {
      flex: none;
    }
  }
`

const ProjectCard = () => {
  return (
    <Card>
      <Container>
        {/* <Grid container>
        <Grid item sm={12}> */}
        <div className="left">
          <Pic alignY="center" align="center"></Pic>
        </div>
        {/* </Grid> */}

        {/* <Grid item sm={12}> */}
        <div className="right">
          <Text variant="paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat
            eget, tristique non, venenatis quis, ante. Aenean id metus id velit ullamcorper
            pulvinar. Duis risus. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Nullam at arcu a est sollicitudin euismod.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Fusce consectetuer risus a nunc. Phasellus rhoncus. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Aliquam erat volutpat. Mauris elementum mauris vitae tortor. Sed ac dolor sit
            amet purus malesuada congue. Donec vitae arcu. Quisque porta. Fusce consectetuer risus a
            nunc. Integer malesuada. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum
            in, elit. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel
            sagittis velit mauris vel metus. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. In dapibus augue non sapien.
            Maecenas sollicitudin. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
            dictum tincidunt diam. Fusce tellus. Cras elementum. Aenean vel massa quis mauris
            vehicula lacinia. Pellentesque ipsum. Etiam bibendum elit eget erat. Duis sapien nunc,
            commodo et, interdum suscipit, sollicitudin et, dolor. Maecenas lorem. Sed convallis
            magna eu sem. Etiam dictum tincidunt diam. Duis pulvinar. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Phasellus et
            lorem id felis nonummy placerat.
          </Text>
        </div>
        {/* </Grid>
      </Grid> */}
      </Container>
    </Card>
  )
}

export default function ProjectsPage() {
  return (
    <Page title="My projects">
      <PageSection title="Strenghts">
        <Stack gap="L">
          <ProjectCard />
          <ProjectCard />
        </Stack>
      </PageSection>
    </Page>
  )
}
