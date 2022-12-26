import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const ForbiddenIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M20 5.5c-7.995 0-14.5 6.507-14.5 14.501C5.502 27.996 12.005 34.5 20 34.5s14.502-6.504 14.502-14.499C34.502 12.007 27.995 5.5 20 5.5zM7.521 20.001C7.521 13.119 13.119 7.52 20 7.52c2.965 0 5.689 1.039 7.833 2.771L10.29 27.834a12.421 12.421 0 0 1-2.769-7.833zM20 32.482a12.428 12.428 0 0 1-8.317-3.185l17.615-17.615A12.43 12.43 0 0 1 32.482 20C32.481 26.883 26.883 32.482 20 32.482z'
      stroke='none'
    />
  </svg>
)

const ForwardRef = forwardRef(ForbiddenIcon)
export default ForwardRef
