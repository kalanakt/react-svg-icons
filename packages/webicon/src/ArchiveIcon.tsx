import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const ArchiveIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M34.949 21.604 30.081 8.122a.75.75 0 0 0-.706-.496h-18.75a.751.751 0 0 0-.705.496L5.051 21.604a.768.768 0 0 0-.051.267v9.753c0 .414.336.75.75.75h28.5a.75.75 0 0 0 .75-.75V21.871a.725.725 0 0 0-.051-.267zM11.151 9.125H28.85l4.333 12h-1.682l-2.024-6.004a.751.751 0 0 0-.711-.51H11.71a.75.75 0 0 0-.704.492l-2.207 6.022h-1.98l4.332-12zm18.767 12h-4.293a.75.75 0 0 0-.67.414l-1.668 3.336h-6.573l-1.668-3.336a.75.75 0 0 0-.671-.414h-3.978l1.837-5.014h15.992l1.692 5.014zm3.582 9.749h-27v-8.249h7.412l1.668 3.335a.75.75 0 0 0 .67.414h7.5a.75.75 0 0 0 .672-.414l1.668-3.335h7.41v8.249z' />
  </svg>
)

const ForwardRef = forwardRef(ArchiveIcon)
export default ForwardRef
