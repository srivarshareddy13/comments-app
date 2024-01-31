import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentList: [],
    nameInput: '',
    commentInput: '',
  }

  deleteComment = id => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(each => each.id !== id),
    })
  }
  toggleIsLiked = id => {
    this.setState(
      (prevState = {
        commentList: prevState.commentList.map(each => {
          if (id === each.id) {
            return {...each, isLiked: !each.isLiked}
          }
        }),
      }),
    )
  }

  renderCommentList = () => {
    const {commentList} = this.state

    return commentList.map(each => (
      <CommentItem
        key={each.id}
        commentDetails={each}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()

    const {nameInput, commentInput} = this.state
    const initialColor = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }
    `

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialColor,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {nameInput, commentInput, commentList} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1>Comments</h1>
          <form onSubmit={this.onAddComment}>
            <p>Say something about 4.0 Technilogies</p>
            <input
              type="text"
              value={nameInput}
              placeholder="Your Name"
              onChange={this.onChangeName}
            />
            <textarea
              value={commentInput}
              rows="6"
              placeholder="Your Comment"
              onChange={this.onChangeComment}
            />
            <button type="submit">Add Comment</button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />
        <p>
          <span>{commentList.length}</span>
          Comments
        </p>
        <ul>{this.renderCommentList()}</ul>
      </div>
    )
  }
}

export default Comments
