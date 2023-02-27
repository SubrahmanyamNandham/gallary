// Write your code her
import './index.css'

const ThumbnailItem = props => {
  const {userDetails, clickTabItem, isActive} = props
  const {
    id,
    thumbnailUrl,

    thumbnailAltText,
  } = userDetails

  const ClickGetImage = () => {
    clickTabItem(id)
  }
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`
  return (
    <li className="thumbnail-list-item">
      <div>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={ClickGetImage}
          className={thumbnailClassName}
        />
      </div>
    </li>
  )
}
export default ThumbnailItem
