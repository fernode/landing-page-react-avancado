export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
}

type techIcons = {
  title: string
  icon: {
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: techIcons[]
}

type concepts = { title: string }

export type SectionConceptsProps = {
  title: string
  concepts: concepts[]
}

type modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

type SocialLinks = {
  title: string
  url: string
}

export type Authors = {
  name: string
  role: string
  photo: {
    url: string
    alternativeText: string
  }
  description: string
  socialLinks: SocialLinks[]
}

export type SectionAboutUsProps = {
  authors: Authors[]
}

type Reviews = {
  name: string
  text: string
  photo: {
    url: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: Reviews[]
}

export type Questions = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Questions[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
