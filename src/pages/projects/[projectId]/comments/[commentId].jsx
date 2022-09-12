import React from 'react'

export default function Tool(props) {
  return (
    <div>
      {props.params.projectId}
      {props.params.commentId}
    </div>
  )
}