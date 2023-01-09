import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const UpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M5.938 28.131a.938.938 0 0 1-.669-1.594L19.37 12.149a.938.938 0 0 1 1.338 0l14.023 14.308a.939.939 0 0 1-.012 1.326.939.939 0 0 1-1.326-.014L20.039 14.146 6.608 27.85a.942.942 0 0 1-.67.281z' />
  </svg>
)

const ForwardRef = forwardRef(UpIcon)
export default ForwardRef
