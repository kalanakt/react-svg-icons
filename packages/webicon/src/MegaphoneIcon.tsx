import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const MegaphoneIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M35.203 9.002a.764.764 0 0 0-.66-.129L8.286 16.106l-2.819-.818a.761.761 0 0 0-.664.122.753.753 0 0 0-.303.605v7.766c0 .24.114.467.309.608a.75.75 0 0 0 .673.113l2.631-.821a.763.763 0 0 0 .354-.006l4.166 1.19-.001.027a6.387 6.387 0 0 0 1.937 4.43 6.38 6.38 0 0 0 4.487 1.831 6.406 6.406 0 0 0 5.378-2.916l10.104 2.886a.756.756 0 0 0 .963-.727V9.604a.758.758 0 0 0-.298-.602zM24.402 26.653a.74.74 0 0 0-.227-.063L9.037 22.265V17.47l21.926-6.041V28.53l-6.561-1.877zm-18.39-9.63 1.512.437v4.818l-1.512.473v-5.728zM19.055 29.64c-2.487 0-4.586-1.906-4.878-4.333l8.712 2.489a4.898 4.898 0 0 1-3.834 1.844zm14.933-.246-1.513-.433V11.012l1.513-.416v18.798z' />
  </svg>
)

const ForwardRef = forwardRef(MegaphoneIcon)
export default ForwardRef
