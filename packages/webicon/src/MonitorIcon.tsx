import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const MonitorIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <ellipse cx={20} cy={25.282} rx={0.968} ry={0.977} />
    <path d='M34.24 5.851H5.759a.86.86 0 0 0-.859.857V28.47a.86.86 0 0 0 .859.859H19.14v3.104h-6.105a.86.86 0 0 0 0 1.716h13.932a.86.86 0 0 0 0-1.716H20.86v-3.104h13.38a.86.86 0 0 0 .859-.859V6.708a.857.857 0 0 0-.859-.857zM6.619 21.063V7.567h26.762v13.496H6.619zm0 6.547v-4.83h26.762v4.83H6.619z' />
  </svg>
)

const ForwardRef = forwardRef(MonitorIcon)
export default ForwardRef
