// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateInput(suggestion)
  }

  return (
    <li className="list-item-container">
      <p className="item">{suggestion}</p>
      <button type="button" className="arrow-btn" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
