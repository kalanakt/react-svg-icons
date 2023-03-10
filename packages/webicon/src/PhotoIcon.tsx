import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const PhotoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path
      fill='#010101'
      d='M34.286 31.068H5.713A.714.714 0 0 1 5 30.353V13.216c0-.393.32-.713.713-.713H7.86v-1.069c0-.396.32-.715.713-.715h3.572c.395 0 .714.319.714.715v1.069h1.343l1.589-3.178a.712.712 0 0 1 .638-.394h7.141a.71.71 0 0 1 .638.394l1.589 3.178h8.489c.394 0 .714.32.714.713v17.137c0 .395-.32.715-.714.715zM6.428 29.64H33.57V13.932h-8.215a.713.713 0 0 1-.639-.396l-1.588-3.176H16.87l-1.588 3.176a.717.717 0 0 1-.64.396h-2.499a.715.715 0 0 1-.714-.716v-1.069H9.288v1.069c0 .396-.32.716-.715.716H6.428V29.64zm13.568-2.05a6.526 6.526 0 0 1-6.518-6.519c0-3.594 2.924-6.518 6.518-6.518s6.518 2.924 6.518 6.518a6.526 6.526 0 0 1-6.518 6.519zm0-11.607c-2.806 0-5.09 2.282-5.09 5.088s2.285 5.091 5.09 5.091c2.805 0 5.089-2.285 5.089-5.091s-2.284-5.088-5.089-5.088z'
    />
  </svg>
)

const ForwardRef = forwardRef(PhotoIcon)
export default ForwardRef
