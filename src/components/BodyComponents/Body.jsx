import React from 'react'
import BodyHeader from './BodyHeader/BodyHeader'
import Posts from './Posts/Posts'
import RelatedDeal from './RelatedDeal/RelatedDeal'
import Signup from './Signup/Signup';
import "./body.css"

const Body = () => {
  return (

    <div className="body-container">
      <BodyHeader />
      <Posts />
      <RelatedDeal />
      <Signup />

    </div>

  )
}

export default Body
