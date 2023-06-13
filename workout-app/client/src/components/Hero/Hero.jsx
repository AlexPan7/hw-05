import styles from './Hero.module.scss';
import Button from '../Button/Button';


const Hero = () => {
  const {hero, category, badge, content, btnGroup, heroImg, infoLabels, label} = styles

  return (
    <section className={hero}>
      <strong className={category}><span className={badge}>New</span> High Intensity workout to burn calories</strong>
      <h1>Cardio Exercise</h1>
      <div className={content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className={btnGroup}>
        <Button>Get Started</Button>
        <Button $primary>Preview</Button>
      </div>
      <img className={heroImg} src="./images/img-hero.png" alt="girl" />
      <ul className={infoLabels}>
        <li className={label}>
          <strong className={styles.markYellow}>38:14</strong>
          TIME
        </li>
        <li className={label}>
          <strong className={styles.markRed}>165</strong>
          EST CALORIES
        </li>
      </ul>
    </section>
  )
}

export default Hero