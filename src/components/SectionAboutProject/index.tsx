import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { sectionAboutProjectProps } from '../../types/api'
import { getImageUrl } from '../../utils/getImageUrl'

type Props = {
  about: sectionAboutProjectProps
}

const SectionAboutProject = ({ about }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(about.image.url)}
          alt={about.image.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading>{about.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{
              __html: about.description
            }}
          ></S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
