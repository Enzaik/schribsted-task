import React, { Component } from 'react';

import Article from '../../components/Article/Article';


class Articles extends Component {

    state = {
        articles: []
    };


    componentDidMount() {
        let that = this;
        fetch('http://localhost:6010/articles/fashion')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log(json);
                that.setState(json);
                // console.log(that);
            });


    };


    render() {
        return (
            <div>
                {
                  
                    this.state.articles.map(article => {
                        return <Article key = {article.id} title = {article.title}/>
                    })
                }
            </div>



        )
    }
};

export default Articles;