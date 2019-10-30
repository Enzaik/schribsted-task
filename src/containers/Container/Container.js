import React, { Component } from 'react';

import Article from '../../components/Article/Article';
import CategoriesInput from '../../components/CategoriesInput/CategoriesInput'
import SortInput from '../../components/SortInput/SortInput';
import './Container.css'

class Container extends Component {

    state = {
        articles: [],
        fashion: false,
        sport: false,
        order: 'asc',
        error: false
    };

    updateArticles = articles => {
        this.setState({ articles: this.state.articles.concat(articles) });
    }

    componentDidMount() {
        fetch('http://localhost:6010/articles/sports')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((json) => {
                this.setState(json);
            })
            .catch(() => {
                this.setState({ error: true })
            });

        fetch('http://localhost:6010/articles/fashion')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((json) => {
                this.setState({ articles: this.state.articles.concat(json.articles) });
            })
            .catch(() => {
                this.setState({ error: true })
            });
    };

    handleClick = e => {
        e.persist();
        this.setState((prevState, prevProps) => {
            return { [e.target.value]: !prevState[e.target.value] }
        })
    }

    handleSortChange = e => {
        this.setState({ order: e.target[e.target.selectedIndex].value })
    }

    compare = (a, b) => {
        const months = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember']

        let [dayA, monthA, yearA] = a.props.date.split(' ');
        let [dayB, monthB, yearB] = b.props.date.split(' ');

        dayA = dayA.split('.')[0];
        dayB = dayB.split('.')[0];
        let myADate = new Date(`${yearA}-${months.indexOf(monthA) + 1}-${dayA}`)
        let myBDate = new Date(`${yearB}-${months.indexOf(monthB) + 1}-${dayB}`)

        if (myADate < myBDate && this.state.order === 'asc') {
            return -1;
        }
        if (myADate > myBDate && this.state.order === 'asc') {
            return 1;
        }
        if (myADate < myBDate && this.state.order === 'desc') {
            return 1;
        }
        if (myADate > myBDate && this.state.order === 'desc') {
            return -1;
        }
        return 0;
    }

    render() {
        let articles;
        if (!this.state.error) {
            articles = this.state.articles.map(article => {
                return <Article
                    key={article.id}
                    title={article.title}
                    img={article.image}
                    category={article.category}
                    date={article.date}
                    preamble={article.preamble}
                />
            })
                .filter(elem => {
                    return this.state[elem.props.category]
                })
                .sort(this.compare)
        } else {
            articles = <span> Server error </span>
        }

        let categoriesInput = !this.state.error ? (
            <CategoriesInput handleClick={this.handleClick} />
        ) : null;

        let sortInput = !this.state.error ? (
            <SortInput handleSortChange={this.handleSortChange} />
        ) : null;

        return (
            <div className='container'>
                <div className='select'>
                    {sortInput}
                </div> <div className='main'>
                    <div className='categories'>
                        {categoriesInput}
                    </div>
                    <div className='articles'>
                        {articles}
                    </div>
                </div>
            </div>
        )
    }
};

export default Container;