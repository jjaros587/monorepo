import styled from '../ui-theme'
import { MEDIA_MAX_WIDTH } from './constants'

export const Container = styled.div.attrs({ id: 'shell-container' })`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  ${(p) => p.theme.font.body()};
`

export const Main = styled.div.attrs({ id: 'shell-main' })`
  flex: 1;
  display: flex;
`

export const Content = styled.div.attrs({ id: 'shell-content' })`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const PageWrapper = styled.div.attrs({ id: 'shell-pageWrapper' })`
  flex: 1;
  align: center;
  overflow: auto;
  ${(p) => p.theme.padding('XXL')};
`

export const BulkPanel = styled.div.attrs({ id: 'shell-bulkPanel' })`
  width: 100%;
  height: 50px;
`

export const Sidebar = styled.div.attrs({ id: 'shell-sidebar' })<{ opened: boolean }>`
  transition: 300ms ease all;
  // background-color: rgba(255, 255, 255, 0.15);
  background-color: ${(p) => p.theme.colors.background};
  border-left: 1px solid ${(p) => p.theme.colors.primary};

  // backdrop-filter: blur(1px);
  right: 0px;
  z-index: 998;

  margin-right: ${(props) => (props.opened ? '0px' : '-401px')};
  width: 400px;

  @media (max-width: ${MEDIA_MAX_WIDTH}) {
    left: 0px;
  }
`
