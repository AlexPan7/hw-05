import styled from 'styled-components'

const Button = styled.button`
  border: 0;
  background: var(--acent-color);
  border-radius: 0.625rem;
  display: inline-flex;
  font-weight: 600;
  font-size: var(--text-md);
  line-height: 1.375;
  letter-spacing: 0.0625rem;
  color: var(--white-color);
  padding: 1.33em 2.223em;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    background: var(--white-color);
    color: var(--acent-color);
  }

  @media (min-width: 640px) {
    font-size: var(--text-lg);
  }

  ${props => props.$primary &&`
    background: var(--primary-color-100);
  `}
`

export const SmallButton = styled(Button)`
  padding: 0.5em;
  font-size: 0.75rem;
`;

export default Button