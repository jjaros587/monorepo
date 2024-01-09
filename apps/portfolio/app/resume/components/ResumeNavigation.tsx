import { useEventListener } from '@hooks'
import { Text } from '@ui'
import { useRef, useState, RefObject, ReactNode, useCallback } from 'react'

type SectionRefs = Record<string, RefObject<HTMLAnchorElement>>

const Item = ({ isActive, children }: { isActive: boolean; children: ReactNode }) => {
  return (
    <li>
      <Text variant="headline1" color={isActive ? 'light' : undefined}>
        {children}
      </Text>
    </li>
  )
}

export const ResumeNavigation = () => {
  const [activeSection, setActiveSection] = useState<RefObject<HTMLAnchorElement> | null>(null)

  const sectionRefs: SectionRefs = {
    experience: useRef<HTMLAnchorElement>(null),
    education: useRef<HTMLAnchorElement>(null),
  }

  useEventListener('scroll', () => {
    const scrollPosition = window.scrollY

    const activeSection = Object.values(sectionRefs).find((section, index, sections) => {
      if (section.current) {
        const buffer = 50
        return (
          scrollPosition + window.innerHeight >= section.current.offsetTop + buffer &&
          scrollPosition <= section.current.offsetTop + section.current.offsetHeight - buffer
        )
      }
      return false
    })

    setActiveSection(activeSection ?? null)
  })

  const isActive = useCallback(
    (ref: RefObject<HTMLAnchorElement>) => ref.current === activeSection?.current,
    [activeSection],
  )

  return (
    <ul>
      <Item isActive={isActive(sectionRefs['experience'])}>
        <a href="#experience" ref={sectionRefs['experience']}>
          Experience
        </a>
      </Item>

      <Item isActive={isActive(sectionRefs['education'])}>
        <a href="#education" ref={sectionRefs['education']}>
          Education
        </a>
      </Item>
    </ul>
  )
}
