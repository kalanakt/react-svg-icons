import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const CloudIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      fill='#010101'
      d='M29.112 30.927H9.876A6.884 6.884 0 0 1 3 24.051a6.886 6.886 0 0 1 6.356-6.858 5.88 5.88 0 0 1 5.583-4.066c.369 0 .744.041 1.133.125a7.874 7.874 0 0 1 6.963-4.177c3.729 0 6.934 2.659 7.688 6.276 3.619.754 6.277 3.96 6.277 7.688 0 4.35-3.538 7.888-7.888 7.888zM9.833 18.791a5.267 5.267 0 0 0-5.215 5.26 5.265 5.265 0 0 0 5.258 5.258h19.236a6.278 6.278 0 0 0 6.271-6.27c0-3.122-2.35-5.78-5.466-6.185a.81.81 0 0 1-.698-.699c-.404-3.115-3.063-5.463-6.184-5.463a6.264 6.264 0 0 0-5.779 3.831.807.807 0 0 1-.996.453 4.255 4.255 0 0 0-1.32-.232 4.256 4.256 0 0 0-4.164 3.409.81.81 0 0 1-.943.638z'
      stroke='none'
    />
  </svg>
)

const ForwardRef = forwardRef(CloudIcon)
export default ForwardRef
