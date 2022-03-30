import React from 'react'
import './User.css'
import {Card, CardImg, CardTitle, CardBody,CardText} from 'reactstrap'

export default function User() {
  const [state,setState]=React.useState()

  React.useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").
    then(response=>response.json()).
    then(data=>setState(data))
  },[])

  return (
    <div className='text-center user-card'>
      {state?.slice(4,7).map((post)=>
        <Card style={{width: 300, margin: "auto"}}>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            {post.title}
          </CardTitle>
          <CardText>
           {post.body}
          </CardText>
        </CardBody>
        </Card>
      )}
     
    </div>
  )
}