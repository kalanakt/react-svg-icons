import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const SitemapIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M7.336 35.5a.726.726 0 0 1-.725-.726v-7.599c0-.4.326-.725.725-.725h3.181v-6.336c0-.342.276-.619.619-.619h8.247v-5.949h-3.181a.727.727 0 0 1-.725-.726V5.223c0-.399.326-.723.725-.723H23.8c.398 0 .725.324.725.723v7.599a.726.726 0 0 1-.725.726h-3.18v5.949h8.245c.341 0 .618.277.618.619v6.336h3.182c.397 0 .724.324.724.725v7.599a.727.727 0 0 1-.724.725h-7.599a.726.726 0 0 1-.726-.725v-7.599c0-.4.325-.725.726-.725h3.179v-5.717H11.754v5.717h3.18c.399 0 .725.324.725.725v7.599c0 .4-.325.726-.725.726H7.336zm.725-1.449h6.149V27.9H8.061v6.151zm17.729 0h6.149V27.9H25.79v6.151zm-8.863-21.952h6.146v-6.15h-6.146v6.15z' />
  </svg>
)

const ForwardRef = forwardRef(SitemapIcon)
export default ForwardRef
