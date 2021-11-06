// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchDetails, onArrowChange} = props
  const {suggestion} = searchDetails

  const onArrowClick = () => {
    onArrowChange(suggestion)
  }
  return (
    <li className="list-container">
      <p className="suggestion-text" onClick={onArrowClick}>
        {suggestion}
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onArrowClick}
      />
    </li>
  )
}

export default SuggestionItem
