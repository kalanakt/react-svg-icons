import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const PowerIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M12.398 35a.824.824 0 0 1-.459-.141.83.83 0 0 1-.323-.995l4.192-11.087h-4.797a.83.83 0 0 1-.773-.518.831.831 0 0 1 .182-.913L26.623 5.245a.828.828 0 0 1 1.035-.117.83.83 0 0 1 .344.984l-3.848 11.103h4.835a.837.837 0 0 1 .585 1.438l-16.59 16.11a.852.852 0 0 1-.586.237zm.644-13.897h3.979c.275 0 .534.135.691.361a.842.842 0 0 1 .092.772l-2.981 7.887.319.209L26.924 18.89h-3.945a.841.841 0 0 1-.792-1.113l2.774-7.998-.32-.203-11.599 11.527z' />
  </svg>
)

const ForwardRef = forwardRef(PowerIcon)
export default ForwardRef
