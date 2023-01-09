import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const ArticleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M12.966 17.262c-.483 0-.878.395-.878.878s.395.877.878.877h13.518c.483 0 .878-.394.878-.877s-.395-.878-.878-.878H12.966z' />
    <path d='M9.411 35a.763.763 0 0 1-.759-.746V5.758c0-.418.34-.758.759-.758h14.704c.2 0 .395.084.547.236l6.449 6.461c.15.13.236.324.236.534v22.022a.764.764 0 0 1-.759.746H9.411zm.759-1.504h19.672V12.989h-5.727a.76.76 0 0 1-.758-.757V6.504H10.17v26.992zm14.705-22.011h3.9l-3.9-3.915v3.915z' />
    <path d='M12.966 21.164c-.483 0-.878.395-.878.878s.395.878.878.878h13.518c.483 0 .878-.395.878-.878s-.395-.878-.878-.878H12.966zM12.966 25.065a.88.88 0 0 0-.878.878c0 .484.395.877.878.877h13.518a.879.879 0 0 0 .878-.877.88.88 0 0 0-.878-.878H12.966z' />
  </svg>
)

const ForwardRef = forwardRef(ArticleIcon)
export default ForwardRef
