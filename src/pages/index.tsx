import React from 'react'
import { GetStaticProps } from 'next'
import client from 'graphql/client'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

import GET_LANDING_PAGE from '../graphql/queries/getLandinPage'

const Index = () => (
  <>
    <SectionHero />
    <SectionAboutProject />
    <SectionTech />
    <SectionConcepts />
    <SectionModules />
    <SectionAgenda />
    <PricingBox />
    <SectionAboutUs />
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
)
export const getStaticProps: GetStaticProps = async () => {
  const { langingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...langingPage
    }
  }
}
export default Index
