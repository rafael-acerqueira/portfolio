import React from 'react'
import SOCIAL_PROFILES from './data/socialProfile'
import SocialProfile from './SocialProfile'

const SocialProfiles = () => (
  <div>
    <h2>Connect with me!</h2>
    <div>
      {
        SOCIAL_PROFILES.map(profile => <SocialProfile key={profile.id} profile={profile} />)
      }
    </div>
  </div>
)

export default SocialProfiles
