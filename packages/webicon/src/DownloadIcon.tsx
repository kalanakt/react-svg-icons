import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const DownloadIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M33.125 35H6.875a.937.937 0 0 1-.938-.938v-5.75a.937.937 0 1 1 1.875 0v4.813h24.375v-4.813a.937.937 0 1 1 1.876 0v5.75c0 .518-.42.938-.938.938' />
      <path d='M20.042 29.249a.934.934 0 0 1-.651-.265l-7.535-7.277a.937.937 0 1 1 1.302-1.349l6.884 6.649 6.884-6.649a.937.937 0 0 1 1.302 1.349l-7.534 7.277a.936.936 0 0 1-.652.265' />
      <path d='M20.042 29.249a.939.939 0 0 1-.938-.939V5.937c0-.519.42-.937.938-.937.519 0 .938.418.938.937V28.31a.939.939 0 0 1-.938.939' />
    </g>
  </svg>
)

const ForwardRef = forwardRef(DownloadIcon)
export default ForwardRef
