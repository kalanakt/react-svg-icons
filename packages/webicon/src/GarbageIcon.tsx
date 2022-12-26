import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const GarbageIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M11.018 35.01a.76.76 0 0 1-.759-.717L8.879 9.946H5.75a.762.762 0 0 1 0-1.521h3.59l.155.025.105-.024h5.171V5.75c0-.419.34-.76.76-.76h8.939a.76.76 0 0 1 .76.76v2.676h5.174l.175.028.118-.028h3.554a.762.762 0 0 1 0 1.521h-3.128l-1.36 24.346a.762.762 0 0 1-.759.718H11.018zm.717-1.52h16.549L29.6 9.946H10.4l1.335 23.544zM16.29 8.426h7.42V6.51h-7.42v1.916z' />
      <path d='M14.302 12.201a.781.781 0 0 0-.57.252.763.763 0 0 0-.192.551l.998 17.608a.762.762 0 0 0 .759.716v.19l.045-.19a.764.764 0 0 0 .715-.804l-.999-17.606a.76.76 0 0 0-.756-.717zM25.709 12.202c-.445 0-.776.314-.8.716l-1 17.606a.765.765 0 0 0 .717.804l.044.19v-.19a.758.758 0 0 0 .757-.716l1.001-17.608a.758.758 0 0 0-.715-.802h-.004zM20 12.201a.76.76 0 0 0-.76.76v17.607a.76.76 0 0 0 1.52 0V12.961a.76.76 0 0 0-.76-.76z' />
    </g>
  </svg>
)

const ForwardRef = forwardRef(GarbageIcon)
export default ForwardRef
