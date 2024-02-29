import React from 'react'
import BodyHeader from './BodyHeader/BodyHeader'
import Posts from './Posts/Posts'
import RelatedDeal from './RelatedDeal/RelatedDeal'
import Signup from './Signup/Signup'

const Body = () => {
  return (
   
      <div className="BodyContainer" style={{minHeight:"100vh",background:" #FBFCFD"
      ,"padding-left":"170px","padding-right":"170px"}}>
      <BodyHeader/>
      <Posts/>
      <RelatedDeal/>
      <Signup/>

      </div>
    
  )
}

export default Body
