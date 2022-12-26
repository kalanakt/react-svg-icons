import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const LocationIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={200}
    height={200}
    viewBox='0 0 40 40'
    xmlSpace='preserve'
    stroke='#000'
    strokeWidth={0}
    ref={ref}
    {...props}
  >
    <g stroke='none'>
      <path d='M20.01 36.5a.836.836 0 0 1-.693-.368L9.468 21.529a11.566 11.566 0 0 1-1.79-6.162C7.678 8.824 13.206 3.5 20 3.5c6.795 0 12.322 5.324 12.322 11.867a11.52 11.52 0 0 1-1.77 6.129l-9.851 14.636a.83.83 0 0 1-.691.368zM20 5.17c-5.873 0-10.652 4.574-10.652 10.197 0 1.854.525 3.669 1.52 5.251l9.14 13.55 9.146-13.581a9.821 9.821 0 0 0 1.499-5.22C30.652 9.744 25.873 5.17 20 5.17z' />
      <path d='M20 20.857c-3.159 0-5.728-2.482-5.728-5.535 0-3.051 2.569-5.534 5.728-5.534s5.729 2.483 5.729 5.534c0 3.053-2.571 5.535-5.729 5.535zm0-9.399c-2.237 0-4.057 1.734-4.057 3.864s1.82 3.865 4.057 3.865 4.058-1.734 4.058-3.865c0-2.13-1.822-3.864-4.058-3.864z' />
    </g>
  </svg>
)

const ForwardRef = forwardRef(LocationIcon)
export default ForwardRef
