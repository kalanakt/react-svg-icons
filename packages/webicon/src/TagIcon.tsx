import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const TagIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M21.768 34a.708.708 0 0 1-.502-.208L6.207 18.733a.721.721 0 0 1-.208-.503l.042-11.523A.71.71 0 0 1 6.751 6l11.479.002c.19 0 .368.072.504.207l15.059 15.059a.706.706 0 0 1-.002 1.004L22.27 33.792a.703.703 0 0 1-.502.208zM7.42 17.866l14.347 14.423L32.288 21.77l-14.3-14.298-10.531-.055-.037 10.449z' />
    <circle cx={11.78} cy={11.777} r={1.33} />
  </svg>
)

const ForwardRef = forwardRef(TagIcon)
export default ForwardRef
