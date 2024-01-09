import './styles/LocationCard.css'
const LocationCard = ( {location} ) => {
  return (
<>
<section className="sectionCard">
  <article>
  <h2>{location?.name}</h2>
  <ul>
    <li><span className="span1">Type: </span><span className="span2">{location?.type}</span></li>
    <li><span className="span1">Dimension: </span><span className="span2">{location?.dimension}</span></li>
    <li><span className="span1">Population: </span><span className="span2">{location?.residents.length}</span></li>
  </ul>
  </article>
  </section>
  </>
)}

export default LocationCard