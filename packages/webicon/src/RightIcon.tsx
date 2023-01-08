import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const RightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M13.36 34a.876.876 0 0 1-.614-1.499l12.717-12.466-12.79-12.536a.876.876 0 0 1 1.225-1.249l13.429 13.161a.877.877 0 0 1 0 1.249L13.974 33.75a.877.877 0 0 1-.614.25z' />
  </svg>
)

const ForwardRef = forwardRef(RightIcon)
export default ForwardRef
