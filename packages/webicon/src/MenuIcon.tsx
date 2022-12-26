import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const MenuIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <g stroke='none'>
      <path d='M34.063 10.625H5.938a.938.938 0 1 1 0-1.875h28.125a.938.938 0 0 1 0 1.875M34.063 20.938H5.938a.938.938 0 0 1 0-1.876h28.125a.938.938 0 0 1 0 1.876M34.063 31.25H5.938a.938.938 0 1 1 0-1.875h28.125a.938.938 0 0 1 0 1.875' />
      <path d='M34.063 20.938H5.938a.938.938 0 0 1 0-1.876h28.125a.938.938 0 0 1 0 1.876' />
    </g>
  </svg>
)

const ForwardRef = forwardRef(MenuIcon)
export default ForwardRef
