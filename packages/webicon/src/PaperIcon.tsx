import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const PaperIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M9.411 35a.762.762 0 0 1-.758-.746V5.758c0-.418.339-.758.758-.758h14.706c.198 0 .394.084.546.236l6.449 6.461c.15.13.235.324.235.535v22.021a.763.763 0 0 1-.758.747H9.411zm.759-1.504h19.672V12.989h-5.726a.759.759 0 0 1-.759-.757V6.504H10.17v26.992zm14.705-22.011h3.9l-3.9-3.914v3.914z' />
  </svg>
)

const ForwardRef = forwardRef(PaperIcon)
export default ForwardRef
