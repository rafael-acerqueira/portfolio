import React from 'react'

const SocialProfile = ({ profile }) => (
  <a href={profile.link} target='_blank' rel='noopener noreferrer'>
    <img src={profile.image} alt='social-profile' style={{ width: 35, height: 35, marginRight: 15 }}/>
  </a>
)

export default SocialProfile