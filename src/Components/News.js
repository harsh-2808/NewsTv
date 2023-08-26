import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 12,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=836e0fb6088a47bca2f866d9123f9930&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    prevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    nextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }


    render() {
        return (
            <div className='container my-3' >
                <h1 className='text-center' style={{ margin: '40px' }}>NewsTv- Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author} date={element.publishedAt} />
                        </div>
                    })
                    }
                </div>

                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.prevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)} className="btn btn-dark" onClick={this.nextClick}> Next &rarr; </button>
                </div>
            </div>
        )

    }
}
export default News;