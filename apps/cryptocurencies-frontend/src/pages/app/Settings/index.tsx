import { TabDescriptor, Tabs } from '@ui'
import { ChangeContent } from './content/ChangePassword'

export const Settings = () => {
  const tabs: TabDescriptor[] = [
    {
      id: 'password',
      displayName: 'Change password',
      Content: <ChangeContent />
    },
    {
      id: 'theme',
      displayName: 'Theme',
      Content: <></>
    },
    {
      id: 'other',
      displayName: 'Other',
      Content: <></>
    }
  ]

  return (
    <>
      <Tabs tabs={tabs} />
    </>
  )
}
