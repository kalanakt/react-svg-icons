import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const MicrophoneIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <g fill='#010101'>
      <path d='M29.364 15.71a.78.78 0 0 0-.78.78v3.901c0 4.733-3.851 8.585-8.584 8.585s-8.585-3.852-8.585-8.585V16.49a.78.78 0 0 0-1.56 0v3.901c0 5.331 4.134 9.716 9.365 10.116v3.932h-5.463a.78.78 0 1 0 0 1.56h12.486a.78.78 0 0 0 0-1.56H20.78v-3.932c5.23-.4 9.365-4.785 9.365-10.116V16.49a.78.78 0 0 0-.781-.78z' />
      <path d='M20 27.025a6.64 6.64 0 0 0 6.633-6.633v-9.76C26.633 6.976 23.657 4 20 4s-6.633 2.976-6.633 6.633v9.76A6.64 6.64 0 0 0 20 27.025zm-5.072-16.392c0-2.797 2.275-5.072 5.072-5.072s5.072 2.275 5.072 5.072v9.76c0 2.797-2.275 5.072-5.072 5.072s-5.072-2.275-5.072-5.072v-9.76z' />
    </g>
  </svg>
)

const ForwardRef = forwardRef(MicrophoneIcon)
export default ForwardRef
