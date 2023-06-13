import { SectionItem, SectionHeading, SectionTitle } from "../components/Section"
import CTA from "../components/CTA"
import Photos from "../components/Photos"

export const About = () => {
  return (
    <>
      <SectionItem>
        <SectionHeading>
          <SectionTitle>About Us</SectionTitle>
        </SectionHeading>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus optio, quas minus aperiam non at omnis quibusdam ut itaque hic accusantium consequuntur officiis ipsa dolores, voluptas, eius ad natus obcaecati?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus optio, quas minus aperiam non at omnis quibusdam ut itaque hic accusantium consequuntur officiis ipsa dolores, voluptas, eius ad natus obcaecati?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus optio, quas minus aperiam non at omnis quibusdam ut itaque hic accusantium consequuntur officiis ipsa dolores, voluptas, eius ad natus obcaecati?</p>
      </SectionItem>
      <SectionItem>
        <SectionHeading>
          <SectionTitle>Testimonials</SectionTitle>
        </SectionHeading>
        <blockquote>
          <p><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique commodi suscipit natus at doloremque. Sapiente, id quia error velit eligendi accusantium temporibus quo, ea, qui consectetur magni voluptates tempora iure.</q></p>
          <cite>Mark Cuckerberg</cite>
        </blockquote>
        <br />
        <blockquote>
          <p><q>2-3 weeks</q></p>
          <cite>Alex Arestovich</cite>
        </blockquote>
      </SectionItem>
      <SectionItem>
        <SectionHeading>
          <SectionTitle>Our photos</SectionTitle>
        </SectionHeading>
        <Photos />
      </SectionItem>
      <CTA />
    </>
  )
}
