import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const StarIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M29.387 34.986a.817.817 0 0 1-.416-.112L20 29.544l-8.977 5.33a.795.795 0 0 1-.412.112.797.797 0 0 1-.481-.158.805.805 0 0 1-.307-.84l2.389-10-7.926-6.717a.81.81 0 0 1 .458-1.426l10.45-.862 4.062-9.479a.81.81 0 0 1 1.49.003l4.06 9.477 10.45.862a.81.81 0 0 1 .458 1.424l-7.928 6.719 2.389 10.002a.804.804 0 0 1-.309.838.794.794 0 0 1-.479.157zM16.489 16.069a.802.802 0 0 1-.677.488l-8.986.742 6.813 5.773a.815.815 0 0 1 .264.807l-2.06 8.624 7.744-4.599a.81.81 0 0 1 .824 0l7.742 4.599-2.06-8.624a.806.806 0 0 1 .265-.807l6.814-5.773-8.988-.742a.804.804 0 0 1-.677-.486L20 7.882l-3.511 8.187z' />
  </svg>
)

const ForwardRef = forwardRef(StarIcon)
export default ForwardRef
