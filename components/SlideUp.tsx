import React, { useEffect, useRef, ReactNode } from "react"

interface Props {
  offset?: string
  children?: ReactNode
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0")
            entry.target.classList.add("animate-slideUpCubiBezier")
          }
        })
      },
      { rootMargin: offset }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, offset])

  // Marcar este componente como un componente del cliente
  useEffect(() => {
    // Esto marca este componente como un componente del cliente
    const clientComponent = document.createElement("div")
    clientComponent.setAttribute("use", "client")
    document.body.appendChild(clientComponent)

    // Limpia el componente del cliente cuando este componente se desmonta
    return () => {
      document.body.removeChild(clientComponent)
    }
  }, [])

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  )
}
