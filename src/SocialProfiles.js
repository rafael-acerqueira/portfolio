import React, { Component } from 'react'
import SOCIAL_PROFILES from './data/socialProfile'
import SocialProfile from './SocialProfile'

class SocialProfiles extends Component {
  render() {
    return(
      <div>
        <h2>Connect with me!</h2>
        <div>
          {
            SOCIAL_PROFILES.map(profile => <SocialProfile key={profile.id} profile={profile} />)
          }
        </div>
      </div>
    )
  }
}

export default SocialProfiles
