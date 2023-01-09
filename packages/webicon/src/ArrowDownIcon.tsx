import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M33.737 19.071a.875.875 0 0 0-1.237.014l-11.625 11.86V6.875a.875.875 0 0 0-1.75 0V31.02L7.5 19.159a.875.875 0 0 0-1.25 1.224l13.09 13.354a.873.873 0 0 0 .625.263l.018-.001L20 34c.32 0 .599-.172.752-.428L33.75 20.31a.877.877 0 0 0-.013-1.239z' />
  </svg>
)

const ForwardRef = forwardRef(ArrowDownIcon)
export default ForwardRef
