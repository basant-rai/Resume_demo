import React from 'react'
import "./skill.css"

const Skill = () => {
  return (
    <>
      <div id='skill' className='mx-auto' >
        <div className='text-center '>
          <h4>SKILLS</h4>
        </div>
        <div className='text-center skill_text w-50 mx-auto mt-5 mx-sm-auto'>
          <p className='text-center '>Iam an experienced and passionate user interface designer with interaction design background.<br></br>
            My goal is to make the world wide web a better place by designing beautiful user experiences, one site at a time.</p>

        </div>
        <div className='mx-lg-auto skill_img' style={{ width: '70%', background: 'transparent' }}>
          <img style={{ background: 'transparent' }} src='./images/skills.png' alt='img' />
        </div>

      </div>

    </>
  )
}

export default Skill