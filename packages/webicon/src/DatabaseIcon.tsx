import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const DatabaseIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path
      fill='#010101'
      d='M32 10.465c0-.948-.66-2.295-3.808-3.337C25.993 6.4 23.084 6 20 6c-3.083 0-5.993.4-8.192 1.128C8.661 8.169 8 9.517 8 10.465l.001.022-.001.009v6.326l.001.023-.001.008v6.325l.001.023-.001.01v6.324c0 .947.661 2.295 3.808 3.337C14.007 33.6 16.917 34 20 34c3.084 0 5.993-.4 8.192-1.128C31.34 31.83 32 30.482 32 29.535V10.465zm-1.5 19.07c0 1.215-4.09 2.977-10.5 2.977S9.5 30.75 9.5 29.535v-4.052c.557.371 1.306.732 2.308 1.063 2.199.729 5.109 1.129 8.192 1.129 3.084 0 5.993-.4 8.192-1.129 1.001-.331 1.751-.692 2.308-1.063v4.052zm0-6.357c0 1.214-4.09 2.977-10.5 2.977S9.5 24.392 9.5 23.178v-4.052c.557.371 1.306.733 2.308 1.065 2.199.728 5.109 1.127 8.192 1.127 3.084 0 5.993-.4 8.192-1.127 1.001-.332 1.751-.694 2.308-1.065v4.052zm0-6.356c0 1.213-4.09 2.975-10.5 2.975S9.5 18.035 9.5 16.822v-4.053c.557.371 1.306.733 2.308 1.065 2.199.728 5.109 1.128 8.192 1.128 3.084 0 5.993-.4 8.192-1.128 1.001-.332 1.751-.694 2.308-1.065v4.053zM20 13.44c-6.41 0-10.5-1.762-10.5-2.975 0-1.214 4.09-2.976 10.5-2.976s10.5 1.762 10.5 2.976c0 1.213-4.09 2.975-10.5 2.975z'
      stroke='none'
    />
  </svg>
)

const ForwardRef = forwardRef(DatabaseIcon)
export default ForwardRef
