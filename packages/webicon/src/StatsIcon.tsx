import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const StatsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M5.85 32.486a.852.852 0 0 1-.85-.852V20.588a.85.85 0 0 1 .85-.85h4.625a.85.85 0 0 1 .85.85v11.047a.852.852 0 0 1-.85.852H5.85zm.85-1.702h2.925v-9.347H6.7v9.347zM21.632 32.486a.852.852 0 0 1-.85-.852v-16.45c0-.469.381-.852.85-.852h4.625c.469 0 .85.383.85.852v16.45a.852.852 0 0 1-.85.852h-4.625zm.849-1.702h2.926v-14.75h-2.926v14.75zM13.741 32.486a.852.852 0 0 1-.85-.852V13.019c0-.469.381-.852.85-.852h4.624c.468 0 .85.383.85.852v18.616a.852.852 0 0 1-.85.852h-4.624zm.85-1.702h2.925V13.868h-2.925v16.916zM29.524 32.486a.852.852 0 0 1-.85-.852V8.363c0-.468.381-.85.85-.85h4.626c.469 0 .85.382.85.85v23.271a.852.852 0 0 1-.85.852h-4.626zm.85-1.702h2.927V9.216h-2.927v21.568z' />
  </svg>
)

const ForwardRef = forwardRef(StatsIcon)
export default ForwardRef
