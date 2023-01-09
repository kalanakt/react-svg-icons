import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const ArrowUpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M33.75 19.616 20.66 6.262A.875.875 0 0 0 20.037 6l-.02.001L20 6a.873.873 0 0 0-.751.428L6.25 19.69a.875.875 0 0 0 1.25 1.224l11.625-11.86v24.07a.876.876 0 0 0 1.75.001V8.981L32.5 20.841a.876.876 0 0 0 1.25-1.225z' />
  </svg>
)

const ForwardRef = forwardRef(ArrowUpIcon)
export default ForwardRef
