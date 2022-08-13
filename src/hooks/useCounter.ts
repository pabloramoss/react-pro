import { useRef, useState, useEffect, useLayoutEffect } from "react"
import { gsap } from "gsap"

interface UseCounterProps {
  maxCount?: number;
}

export const useCounter = ({maxCount = 10}: UseCounterProps) => {

  const elementToAnimate = useRef<any>(null)
  const [counter, setCounter] = useState(5)

  /* 
  Sacamos el metodo timeline de gsap afuera del useEffect porque adentro del mismo
    se vuelve a crear cada vez que counter cambia
    De esta forma, solo se crea la primera vez que se renderiza el componente y luego
    se almacena la referencia en memoria
    Para acceder a esa referencia: tl.current
  */
  const tl = useRef( gsap.timeline() )

  const handleClick = () => {
    setCounter( prev => Math.min( prev + 1, maxCount )) 
  }

  useLayoutEffect(() => {
    if( !elementToAnimate.current ) return

    tl.current.to(elementToAnimate.current,{ y: -10, duration: 0.2, ease: "ease.out"})
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out"})
      .pause()
  }, [])

  useEffect(() => {
    if( counter < maxCount ) return

    tl.current.play(0)
  }, [counter])
  
  return {
    counter,
    elementToAnimate,
    handleClick,
  }
}