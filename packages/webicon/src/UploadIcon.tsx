import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const UploadIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M33.125 35H6.875a.938.938 0 0 1-.938-.938v-5.75a.937.937 0 1 1 1.876 0v4.813h24.375v-4.813a.937.937 0 1 1 1.876 0v5.75a.94.94 0 0 1-.939.938M27.576 14.153a.928.928 0 0 1-.651-.264L20.041 7.24l-6.884 6.649a.937.937 0 1 1-1.301-1.347l7.535-7.277a.93.93 0 0 1 1.301 0l7.535 7.277a.937.937 0 0 1-.651 1.611' />
    <path d='M20.041 29.248a.937.937 0 0 1-.937-.937V5.937a.938.938 0 0 1 1.875 0v22.375a.937.937 0 0 1-.938.936' />
  </svg>
)

const ForwardRef = forwardRef(UploadIcon)
export default ForwardRef
