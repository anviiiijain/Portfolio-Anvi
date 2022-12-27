import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Full-Stack Developer',
          'Change and learning are the only constants in life',
        ],
        autoStart: true,
        // loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
