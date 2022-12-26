import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const CategoryIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M20 21.569a.694.694 0 0 1-.282-.062L5.434 15.115A.746.746 0 0 1 5 14.413a.749.749 0 0 1 .46-.683l14.286-5.681a.695.695 0 0 1 .508 0l14.285 5.679c.275.11.455.378.461.683a.741.741 0 0 1-.434.704L20.281 21.51a.701.701 0 0 1-.281.059zM7.626 14.468l12.339 5.522 12.409-5.522L20 9.549 7.626 14.468z' />
      <path d='M5.434 20.49a.766.766 0 0 1-.376-.983.717.717 0 0 1 .659-.454.68.68 0 0 1 .282.062l13.967 6.249 14.037-6.249a.672.672 0 0 1 .283-.062.71.71 0 0 1 .656.454.764.764 0 0 1-.376.983L20 27.008 5.434 20.49z' />
      <path d='M5.434 25.48a.763.763 0 0 1-.376-.981.717.717 0 0 1 .659-.454c.097 0 .191.021.282.061l13.967 6.25 14.037-6.25a.713.713 0 0 1 .283-.061c.286 0 .544.179.656.454a.762.762 0 0 1-.375.981L20 32 5.434 25.48z' />
    </g>
  </svg>
)

const ForwardRef = forwardRef(CategoryIcon)
export default ForwardRef
