import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const VideoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M13.054 31.397a.713.713 0 0 1-.714-.712v-3.967l-7.312 3.529a.65.65 0 0 1-.297.068c-.206 0-.688-.073-.73-.756l.003-13.235c.028-.643.518-.713.728-.713.105 0 .208.021.267.053l7.342 3.545v-3.967c0-.394.32-.712.714-.712h5.397V9.316c0-.394.32-.714.714-.714H35.28a.714.714 0 1 1 0 1.426H19.878v4.503H35.28c.394 0 .716.326.72.726v15.429c0 .394-.32.712-.712.712H13.054zm.704-1.423h20.803V15.963H13.758v14.011zm-8.336-1.506 6.912-3.332v-4.342l-6.912-3.332v11.006z' />
  </svg>
)

const ForwardRef = forwardRef(VideoIcon)
export default ForwardRef
