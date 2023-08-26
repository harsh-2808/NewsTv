import React, { Component } from 'react';


export class NewsItem extends Component {
    render() {
        let { title, description, newsUrl, imageUrl, date, author, source } = this.props;
        return (
            <div className='my-3' >
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "85%", zIndex: "1" }}>{source}</span>
                    <img src={imageUrl ? imageUrl : "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author}, Last updated {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem