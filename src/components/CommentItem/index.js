// Write your code here
import {formatDistanceToNow} from 'date-fns'
const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, date} = commentDetails

  const initial = name ? name[0].toUpperCase() : ''
  const likeText = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li>
      <div>
        <div>
          <p>{initial}</p>
        </div>
        <div>
          <p>{name}</p>
          <p>{postedTime} ago</p>
        </div>
        <p>{comment}</p>
      </div>
      <div>
        <div>
          <img src={likeImageUrl} alt="like" />
          <button type="button" onClick={onClickLike}>
            Like
          </button>
        </div>
        <button type="button" onClick={onDeleteComment} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
