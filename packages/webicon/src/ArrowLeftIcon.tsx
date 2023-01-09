import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M33.125 19.125H8.98L20.841 7.5a.875.875 0 1 0-1.224-1.249L6.262 19.339a.878.878 0 0 0-.262.626V20c0 .319.171.598.427.751L19.69 33.75a.872.872 0 0 0 1.238-.012.876.876 0 0 0-.013-1.238L9.055 20.875h24.07a.876.876 0 0 0 0-1.75z' />
  </svg>
)

const ForwardRef = forwardRef(ArrowLeftIcon)
export default ForwardRef
