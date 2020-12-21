import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'
import { SectionAboutUsProps } from 'types/api'

import * as S from './styles'

const SectionAboutUs = ({ authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>Quem somos nós?</Heading>

    <S.Content>
      {authors.map((profile) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          image={profile.photo.url}
          socialLinks={profile.socialLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
