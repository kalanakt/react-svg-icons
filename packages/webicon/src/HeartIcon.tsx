import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const HeartIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M20.014 34.519a.783.783 0 0 1-.585-.262c-4.41-4.925-12.784-14.279-12.92-14.439C5.214 18.236 4.5 16.267 4.5 14.273c0-4.85 4.026-8.792 8.974-8.792 2.429 0 4.697.927 6.387 2.615l.139.138.139-.138c1.69-1.688 3.958-2.615 6.388-2.615 4.948 0 8.974 3.942 8.974 8.792 0 2.02-.684 3.923-1.975 5.499L20.597 34.257a.785.785 0 0 1-.583.262zM13.474 7.05c-4.083 0-7.405 3.24-7.405 7.224 0 1.656.561 3.216 1.62 4.507.245.284 8.05 9.006 12.175 13.612l.147.164 12.321-13.803a6.988 6.988 0 0 0 1.598-4.48c0-3.983-3.321-7.224-7.404-7.224-2.339 0-4.491 1.045-5.907 2.869a.784.784 0 0 1-1.24 0c-1.414-1.824-3.566-2.869-5.905-2.869z'
      stroke='none'
    />
  </svg>
)

const ForwardRef = forwardRef(HeartIcon)
export default ForwardRef
