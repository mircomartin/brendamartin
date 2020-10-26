import React from 'react'

//Router
import { useHistory } from 'react-router-dom'

export const BlogCard = ({post}) => {

    const history = useHistory();

    const handleRedirect = () => {
        history.push(`/blog/${post.url}`)

        window.scroll(0,400)
    }
    
    return (
        <div className="col-12 col-md-4 mb-5">
            <figure className="blog__cardFigure">
                <img src={post.img.url} alt={post.titulo} className="img-fluid"/>
            </figure>
            <div className="blog__cardBody" onClick={handleRedirect}>
                <h3 className="blog__cardTitle">{post.titulo}</h3>
                <p className="blog__cardSubtitle">{post.subtitulo}</p>
            </div>
        </div>
    )
}
