import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M34 20a.872.872 0 0 0-.428-.751L20.31 6.25a.875.875 0 0 0-1.226 1.25l11.861 11.625H6.875a.876.876 0 0 0 0 1.75H31.02L19.158 32.5a.877.877 0 0 0 .613 1.5.87.87 0 0 0 .612-.25l13.353-13.089a.876.876 0 0 0 .264-.626l-.001-.017L34 20z' />
  </svg>
)

const ForwardRef = forwardRef(ArrowRightIcon)
export default ForwardRef
