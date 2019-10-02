import React, { Component } from 'react';

import Article from '../../components/Article/Article';


class Articles extends Component {

    state = {
        articles: [],
        error: false
    };


    componentDidMount() {
        let that = this;
        fetch('http://localhost:6010/articles/fashion')
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function (json) {
                console.log(json);
                that.setState(json);
                // console.log(that); 
            })
            .catch(function() {
                console.log("error");
                that.setState({error: true})
            });
    };


    render() {
        let articles;

        if (!this.state.error) {
            articles = this.state.articles.map(article => {
                return <Article
                    key={article.id}
                    title={article.title}
                    img={article.image}
                />
            })
        } else {
            articles = <span> Server error </span>
        }

        return (
            <div>
                {articles}
            </div>



        )
    }
};

export default Articles;