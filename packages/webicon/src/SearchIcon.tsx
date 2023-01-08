import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const SearchIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M36.705 34.289 26.059 23.615c3.918-4.69 3.688-11.708-.707-16.114C23.1 5.243 20.104 4 16.919 4S10.74 5.243 8.488 7.501c-4.647 4.66-4.647 12.241 0 16.899a11.837 11.837 0 0 0 8.431 3.5c2.866 0 5.573-1.015 7.728-2.86l10.639 10.665a1.002 1.002 0 1 0 1.419-1.416zM9.766 23.126c-3.945-3.958-3.945-10.395 0-14.351 1.912-1.914 4.452-2.97 7.153-2.97s5.243 1.056 7.153 2.97c3.946 3.956 3.946 10.394 0 14.351-1.91 1.914-4.452 2.969-7.153 2.969s-5.241-1.055-7.153-2.969z' />
  </svg>
)

const ForwardRef = forwardRef(SearchIcon)
export default ForwardRef
