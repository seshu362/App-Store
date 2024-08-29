// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onclickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabButton = isActive ? 'active-btn' : ''
  return (
    <li className="tab-list">
      <button
        className={`btn-text ${activeTabButton}`}
        onClick={onclickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
