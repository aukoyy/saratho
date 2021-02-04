import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import AuthorList from './author-list'

function BlogPost (props) {
  const {_rawBody, authors, title, mainImage, publishedAt} = props
  return (
    <article className='md:mt-8'>
      <div className='flex' >
        <div className='w-1/2 lg:w-1/3 flex flex-col justify-between'>
          <div>
            <h1 className='text-4xl mt-12 mr-4 border-b-4 border-pink-400'>{title}</h1>

            {publishedAt && (
              <div className='mt-2 text-gray-300'>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
          </div>

          <aside className=''>
            {authors && <AuthorList items={authors} title='Author' className='' />}

          </aside>

        </div>

        <div className='w-1/2 lg:w-2/3 object-cover'>
          {mainImage && mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .url()}
              alt={mainImage.alt}

            />
          )}
        </div>
      </div>

      <div className='mt-8'>
        {_rawBody && <PortableText blocks={_rawBody} />}
      </div>
    </article>
  )
}

export default BlogPost
