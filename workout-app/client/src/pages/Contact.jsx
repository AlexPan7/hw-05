import { SectionItem, SectionHeading, SectionTitle } from "../components/Section"
import ContactForm from "../components/ContactForm"
import Socials from "../components/Socials/Socials"

export const Contact = () => {
  return (
    <>
      <SectionItem>
        <SectionHeading>
          <SectionTitle>Contact Us</SectionTitle>
        </SectionHeading>
        <ContactForm />
        <Socials />
      </SectionItem>
    </>
  )
}
