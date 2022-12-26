import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const ListIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M34.124 8.74H17.175a.928.928 0 0 0 0 1.854h16.949a.927.927 0 0 0 0-1.854zM34.124 19.074H17.175a.928.928 0 0 0 0 1.854h16.949a.928.928 0 0 0 0-1.854zM34.124 29.409H17.175a.928.928 0 0 0 0 1.854h16.949a.928.928 0 0 0 0-1.854zM7.667 33.531a.716.716 0 0 1-.717-.715v-4.961c0-.396.321-.717.717-.717h4.961c.395 0 .717.321.717.717v4.961a.717.717 0 0 1-.717.715H7.667zm.717-1.432h3.526v-3.527H8.384v3.527zM7.667 23.197a.716.716 0 0 1-.717-.716V17.52c0-.396.321-.717.717-.717h4.961c.395 0 .717.321.717.717v4.961a.717.717 0 0 1-.717.716H7.667zm.717-1.433h3.526v-3.527H8.384v3.527zM7.667 12.863a.717.717 0 0 1-.717-.717v-4.96c0-.395.321-.717.717-.717h4.961c.395 0 .717.322.717.717v4.961a.718.718 0 0 1-.717.717H7.667zm.717-1.433h3.526V7.902H8.384v3.528z' />
    </g>
  </svg>
)

const ForwardRef = forwardRef(ListIcon)
export default ForwardRef
