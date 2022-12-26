import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const CloseIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M21.414 20 33.207 8.207a.999.999 0 1 0-1.414-1.414L20 18.586 8.207 6.793a.999.999 0 1 0-1.414 1.414L18.586 20 6.793 31.793a.999.999 0 1 0 1.414 1.414L20 21.414l11.793 11.793a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L21.414 20z'
      stroke='none'
    />
  </svg>
)

const ForwardRef = forwardRef(CloseIcon)
export default ForwardRef
