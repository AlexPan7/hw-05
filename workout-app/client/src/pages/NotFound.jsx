import { Link } from 'react-router-dom';
import { SectionItem, SectionHeading, SectionTitle } from "../components/Section";

export const NotFound = () => {
  return (
    <>
      <SectionItem>
        <Link to='/'>Back to Home</Link>
        <SectionHeading>
          <SectionTitle>404</SectionTitle>
        </SectionHeading>
        <p>Page not found, pls Try another page</p>
      </SectionItem>
    </>
  )
}
