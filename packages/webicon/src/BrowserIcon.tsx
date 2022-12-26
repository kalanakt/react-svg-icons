import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const BrowserIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M34.715 7.345H5.285a.885.885 0 0 0-.885.884V31.77c0 .488.397.885.885.885h29.43a.885.885 0 0 0 .885-.885V8.229a.885.885 0 0 0-.885-.884zM6.169 14.372v-5.26H33.83v5.26H6.169zm0 16.514V16.14H33.83v14.746H6.169z' />
      <circle cx={9.435} cy={11.746} r={0.997} />
      <circle cx={12.93} cy={11.746} r={0.997} />
      <circle cx={16.423} cy={11.746} r={0.997} />
    </g>
  </svg>
)

const ForwardRef = forwardRef(BrowserIcon)
export default ForwardRef
