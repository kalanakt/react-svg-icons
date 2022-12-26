import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'

import { HomeIcon } from '../src'

function IconList() {
  return (
    <div>
      <HomeIcon />
    </div>
  )
}

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<IconList />)
  })
})
