import React from 'react'
import BlogPostPreview from './blog-post-preview'


function BlogPostPreviewGrid (props) {
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}
      <ul>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
