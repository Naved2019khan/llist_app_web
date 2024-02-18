import React from 'react'

const OnClick = () => {

    let data = true

    let delima1 = () => {
        if (data) {
            console.log("Yes")
            data = false
        }
        else {
            console.log("NO")
            data = true
        }
    }

  return (
      <div>
          <button onClick={delima1} className=' w-12 bg-slate-500 h-11'>Click me</button>
          <div className='w-10 h-4 bg-purple-800' ></div>
    </div>
  )
}

export default OnClick