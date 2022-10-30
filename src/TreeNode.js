import React from 'react'

export default function TreeNode() {
  return (
    <div>
        <form>
            <input className='name-input' type="text" placeHolder="Name"/>
            <div>
                <p>Self Point</p>
                <input className='self-point-input' type="number" defaultValue="0" />        
            </div>
            <p>Total Point: </p>
            <button>...</button>
        </form>
    </div>
  )
}