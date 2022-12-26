import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const CodeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M26.308 29.12a.8.8 0 0 1-.61-.283.796.796 0 0 1 .099-1.12l9.171-7.69-9.227-7.741a.795.795 0 0 1 1.023-1.218l9.953 8.352a.792.792 0 0 1-.002 1.216l-9.896 8.297a.787.787 0 0 1-.511.187zM13.693 29.12a.781.781 0 0 1-.511-.187l-9.897-8.299a.793.793 0 0 1-.001-1.216l9.953-8.352a.795.795 0 1 1 1.022 1.218l-9.227 7.741 9.171 7.69a.796.796 0 0 1-.51 1.405zM17.904 29.12a.796.796 0 0 1-.773-.986l4.138-16.649a.793.793 0 0 1 .963-.581.797.797 0 0 1 .58.965l-4.138 16.649a.791.791 0 0 1-.77.602z' />
    </g>
  </svg>
)

const ForwardRef = forwardRef(CodeIcon)
export default ForwardRef
