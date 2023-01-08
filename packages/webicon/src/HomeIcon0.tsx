import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const HomeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M35.667 18.241 20.476 7.193a.81.81 0 0 0-.953 0l-6.715 4.884v-1.85c0-.53-.371-.961-.828-.961H8.334c-.457 0-.828.432-.828.961v5.706l-3.173 2.308a.811.811 0 0 0-.178 1.132.812.812 0 0 0 1.132.178l2.321-1.688v14.29c0 .447.363.811.81.811h8.178a.81.81 0 0 0 .81-.811v-9.715h5.191v9.715a.81.81 0 0 0 .809.811h8.178a.812.812 0 0 0 .811-.811v-14.29l2.322 1.688a.814.814 0 0 0 1.131-.178.816.816 0 0 0-.181-1.132zM9.162 11.188h1.991v2.092l-1.991 1.448v-3.54zm21.61 20.154h-6.558v-9.714a.811.811 0 0 0-.811-.81h-6.809a.811.811 0 0 0-.81.81v9.714H9.228V16.684L20 8.85l10.772 7.834v14.658z'
      stroke='none'
    />
  </svg>
)

const ForwardRef = forwardRef(HomeIcon)
export default ForwardRef
