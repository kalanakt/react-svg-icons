import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const MapIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M25.38 34.848a.995.995 0 0 1-.206-.024l-10.498-2.561-10.61 2.561A.86.86 0 0 1 3 33.986V8.635a.86.86 0 0 1 .657-.836l10.76-2.623.407.003 10.504 2.558 10.607-2.561A.856.856 0 0 1 37 6.012v25.352c0 .397-.27.741-.656.837l-10.759 2.622a.919.919 0 0 1-.205.025zm-9.899-4.16 9.039 2.203V9.311l-9.039-2.203v23.58zM26.24 9.311v23.58l9.039-2.202V7.108L26.24 9.311zm-21.519 0v23.58l9.039-2.202V7.108L4.721 9.311z'
      stroke='none'
    />
  </svg>
)

const ForwardRef = forwardRef(MapIcon)
export default ForwardRef
