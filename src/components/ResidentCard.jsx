import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import './styles/ResidentCard.css'

const ResidentCard = ( {url} ) => {
  
  const [ resident, getResident ] = useFetch(url)

  useEffect(() => {
    getResident() 
  }, [])

  return (
    <>
  <section className="section">
    <header>
      <img src={resident?.image} alt="" />
      <article className="article1">
        <div className={`div ${resident?.status}`}> </div>
          <span>{resident?.status}</span>
      </article>
    </header>
    <article className="article2">
      <h3>{resident?.name}</h3>
      <hr />
      <ul>
        <li><span className="span1">Specie: </span><span className="span2">{resident?.species}</span></li>
        <li><span className="span1">Origin: </span><span className="span2">{resident?.origin.name}</span></li>
        <li><span className="span1">Eppisodes where appear: </span><span className="span2">{resident?.episode.length}</span></li>
      </ul>
    </article>
  </section>
    </>
  )
}

export default ResidentCard