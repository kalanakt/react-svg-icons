import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const ImageIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M5.667 31.843A.668.668 0 0 1 5 31.175V8.823c0-.367.3-.666.667-.666h28.666c.367 0 .667.299.667.666v22.352c0 .369-.3.668-.667.668H5.667zm1.377-1.336h25.734l-8.068-8.582-3.695 3.928a.669.669 0 0 1-.494.207.668.668 0 0 1-.524-.262l-4.704-6.205-8.249 10.914zM24.71 20.282c.182 0 .359.076.485.209l8.469 9.008V9.493H6.336v19.734l8.421-11.143a.678.678 0 0 1 .533-.268c.213 0 .406.098.533.266l4.759 6.275 3.639-3.867a.683.683 0 0 1 .489-.208z' />
      <path d='M25.154 17.769c-1.616 0-2.931-1.316-2.931-2.932s1.314-2.93 2.931-2.93 2.932 1.314 2.932 2.93-1.315 2.932-2.932 2.932zm0-4.526c-.879 0-1.595.715-1.595 1.594s.716 1.596 1.595 1.596c.88 0 1.596-.717 1.596-1.596s-.716-1.594-1.596-1.594z' />
    </g>
  </svg>
)

const ForwardRef = forwardRef(ImageIcon)
export default ForwardRef
