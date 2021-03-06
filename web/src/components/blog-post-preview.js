import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

function BlogPostPreview (props) {
  return (
    <Link
      to={getBlogUrl(props.publishedAt, props.slug.current)}
      className='flex my-20 p-2 shadow-md rounded-md'
    >
      <div className='w-1/2'>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className='ml-4 mt-8 w-1/2'>
        <h3 className='text-4xl border-b-4 border-pink-400'>{props.title}</h3>
        <div className='mt-2 text-gray-300'>{format(props.publishedAt, 'MMMM Do, YYYY')}</div>
        {props._rawExcerpt && (
          <div className='mt-4'>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
      </div>
    </Link>
  )
}

export default BlogPostPreview
