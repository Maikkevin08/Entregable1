import "./styles/quoteBox.css"
const QuoteBox = ({quote, handleChangeQuote}) => {
    //en parrafo:(p) la frase-->para q se visualice aleatoriamente:
    // se llama quote.pharase
    
    //otra manaera es en la siguiente linia: {Author}
    const {author}=quote
  return (
    <article className="quotebox">
        <h1 className="quotebox__title">INFOGALAX</h1>
        <div className="quotebox__box">
            <p>{quote.phrase}</p>
        </div>
        <button className="quotebox__btn" onClick={handleChangeQuote}>
          <img src="/boton.svg" alt="" />
          
          </button>

        <span className="quotebox__author"><span>Fuente: </span>{author}</span>
    </article>
  )
}
export default QuoteBox