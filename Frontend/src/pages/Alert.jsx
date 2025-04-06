import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'

function alert() {
  return (
    <>
    <div className="alert alert-dismissible bg-success fade show" style={{
     zIndex:'999',
     position:'absolute'
    }}>
     <div className="alert-header">
      <h1>Title</h1>
     </div>
      alert
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit architecto fugit rem magni blanditiis maiores sit repellendus, culpa iure ea! Facilis nesciunt eius iste laudantium, hic laboriosam similique expedita quod, cum repellendus natus odit officia impedit sed quo saepe. Aut provident impedit officiis praesentium repudiandae suscipit minus autem aperiam aliquam neque voluptate fugit, ullam corrupti inventore architecto earum! Est architecto et laudantium vero soluta natus asperiores ad quia possimus optio dignissimos nisi doloribus neque laborum earum ipsa officia, amet sequi recusandae laboriosam quaerat error aut nostrum. Labore vero sunt ex rerum nobis, distinctio tempore quis, voluptate numquam explicabo architecto minus itaque facere velit debitis dolorum optio quos officiis cumque illum doloribus? Tempore quod, numquam blanditiis eum atque amet quas, molestiae suscipit eveniet labore nemo sapiente omnis quidem facilis quaerat rerum, dolorem autem architecto! Similique expedita quod, autem quidem architecto eaque sint in totam ipsam mollitia possimus aut obcaecati eveniet odit earum impedit, fugiat quaerat recusandae fuga laboriosam. Repellat impedit inventore eos numquam suscipit mollitia repellendus consectetur accusantium nulla consequuntur eveniet minima eligendi, ipsum laudantium placeat vero vitae voluptatibus accusamus maiores! Sunt ipsum veritatis eius incidunt. Incidunt aspernatur ipsam aut deleniti ipsa at culpa hic! Consequatur quos ut assumenda repudiandae suscipit.
      </p>
      <button className="btn-close" aria-label='close' data-bs-dismiss="alert"></button>
      <div className="alert-footer">
        Footer
      </div>
    </div>
    </>
    
  )
}

export default alert