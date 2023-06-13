import styles from './CallButton.module.scss';
import { useEffect, useState, useMemo } from 'react';

const CallButton = () => {
  const {callBtn} = styles;
  const [scrollY, setScrollY] = useState(0);
  const [isMiddle, setIsMiddle] = useState(false);

  useEffect(()=>{
    function handleScroll() {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  })

  const middleOfPage = useMemo(()=> {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    
    return (docHeight - winHeight) / 5
  })

  useEffect(()=>{
    setIsMiddle(scrollY > middleOfPage);
  }, [scrollY, middleOfPage]) 

  return isMiddle && <a className={callBtn} href="tel:+0000000000">Call Us</a>
}

export default CallButton;