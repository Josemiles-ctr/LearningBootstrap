import React from 'react'

function Card() {
  return (
    <div className="card">
        <div className="card-header">
            <h1>Header</h1>
        </div>
        <img src="2.png" alt="" className="card-img-top" />
        <div className="card-body">
            <div className="card-title">
                <h2>Title</h2>
                <div className="card-subtitle">
                    <span>SubTitle</span>
                </div>
            </div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et veritatis optio consectetur? Ullam ipsa, voluptatum voluptatibus praesentium ex mollitia? Laboriosam, consequatur architecto. Cum ipsam, minus enim temporibus magnam magni reprehenderit.
        </div>
        <div className="card-footer">
            Footer
        </div>
    </div>
  )
}

export default Card