import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const CheckIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M16 31a.996.996 0 0 1-.707-.293l-10-10a.999.999 0 1 1 1.414-1.414L16 28.586 35.293 9.293a.999.999 0 1 1 1.414 1.414l-20 20A.997.997 0 0 1 16 31'
      stroke='none'
    />
  </svg>
)

const ForwardRef = forwardRef(CheckIcon)
export default ForwardRef
