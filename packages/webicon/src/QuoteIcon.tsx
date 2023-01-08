import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const QuoteIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M27.758 32.244 34 19.074V7.756H21.241V19.76h4.87l-4.87 12.484h6.517zm-4.612-14.389V9.662h8.948v8.983l-5.543 11.693h-2.522l4.868-12.482h-5.751zM12.517 32.244l6.242-13.17V7.756H6V19.76h4.871L6 32.244h6.517zM7.905 17.855V9.662h8.948v8.983l-5.542 11.693H8.789l4.868-12.482H7.905z' />
  </svg>
)

const ForwardRef = forwardRef(QuoteIcon)
export default ForwardRef
