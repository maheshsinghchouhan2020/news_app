import React from 'react'
import image from "../assets/Nnews.jpg"

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "298px" }}>
            <img src={src ? src : image} style={{ height: "170px", width: "285px" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa provident fugiat corrupti voluptatibus, iusto neque ab aspernatur magni voluptas tempora sit repellat itaque ullam impedit porro ex sequi deleniti."}</p>
                <a href={url} className="btn btn-primary">Read More...</a>
            </div>
        </div>
    )
}

export default NewsItem