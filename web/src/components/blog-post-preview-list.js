import React from 'react'
import BlogPostPreview from './blog-post-preview'

export const BlogPostPreviewGrid = (props) => {
  return (
    <ul>
      {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
    </ul>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
