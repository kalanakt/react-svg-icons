import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const DownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M19.962 28.131a.941.941 0 0 1-.67-.281L5.27 13.542a.938.938 0 1 1 1.337-1.313l13.354 13.625L33.394 12.15a.939.939 0 0 1 1.326-.015.941.941 0 0 1 .013 1.327L20.632 27.85a.945.945 0 0 1-.67.281z'
      stroke='none'
    />
  </svg>
)

const ForwardRef = forwardRef(DownIcon)
export default ForwardRef
