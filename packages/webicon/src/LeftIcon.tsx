import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const LeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path
      d='M26.714 34a.865.865 0 0 1-.612-.251l-13.429-13.16a.877.877 0 0 1 0-1.25L26.027 6.251a.874.874 0 1 1 1.224 1.248L14.536 19.965l12.79 12.536A.875.875 0 0 1 26.714 34z'
      stroke='none'
    />
  </svg>
)

const ForwardRef = forwardRef(LeftIcon)
export default ForwardRef
