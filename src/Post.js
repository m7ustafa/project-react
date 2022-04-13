import { useState } from "react";

function Post ({name , img , img2}) {
   const[count , setcount] = useState({
       like1 : 0 ,
       total_likes : 0 ,
       like2 : 0
   })
function handleClick1(event) {
    setcount(count => ({
        ...count,
        like1: count.like1 + 1 ,
        total_likes : count.total_likes + 1
    }))

}
function handleClick2(event) {
    setcount(count=>({
        ...count,
        like2 : count.like2 + 1 ,
        total_likes : count.total_likes +1  
    }))
}

   return( 
   <div><div className='container'>
   <p className='p'>
     Welcome {name}
   </p>
   <div className='total-counts'>
     <div className='left'>
       <img src='./person.png' className='img1'/>
       <p>
       {name}
       </p>
     </div>
     <div className='right'>
       <p>
         {count.total_likes}
       </p>
     </div>
    </div>
    </div>
       <div className="container">
       <p className='p'>
         last activities
       </p> <br/> <br/>
    <div className='post'>
    <div className='up'>
       <img src='./person.png' id='img2'/>
    <p>
      {name}
    </p>
    </div>
    <div><img src={img} id='img-post' />
    </div>
    <div>
      <p>
        {count.like1}
      </p>
      <button onClick={handleClick1}>
        like
      </button>
    </div> <br/>
  </div> <br/> <br/>
  <div className='post'> 
    <div className='up'>
       <img src='./person.png' id='img2'/>
    <p>
      {name}
    </p>
    </div>
    <div><img src={img2} id='img-post' />
    </div>
    <div>
      <p>
        {count.like2}
      </p>
      <button onClick={handleClick2}>
        like
      </button>
    </div> 
  </div> <br/>
  </div>
</div>

   )
}
export default Post ;