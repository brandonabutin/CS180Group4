import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import axios from 'axios'

var newsObjectList = [];

class News extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      newsData: [],
    };
  }
  renderNews(key, value) {
    return(
      <>
      <Card.Title><a href={key.url}>{key.title}</a></Card.Title>
      <Card.Text>
        {key.author != null && "By: " + key.author}
        {key.author != null && <br></br>}
        {key.publishedAt != null && "Date: " + key.publishedAt.substring(0, key.publishedAt.indexOf('T'))}
        {key.publishedAt != null && <br></br>}
        {key.description}
      </Card.Text>
      </>
    )
  }
  getNews() {
    axios.get("https://newsapi.org/v2/everything?q=" + this.props.name + "&sortBy=publishedAt&language=en&apiKey=d371789835b74790872200863148cf78")
      .then(res => {
        const newsArticles = res.data['articles']
        console.log(newsArticles)
        this.setState({newsData: newsArticles})
      });
  }
  render() {
    this.getNews();
    newsObjectList = [];
    for(let index in this.state.newsData) {
      var newsObject = {};//title, author, description, url, urlToImage, publishedAt
      newsObject['title'] = this.state.newsData[index]["title"];
      newsObject['author'] = this.state.newsData[index]["author"];
      newsObject['description'] = this.state.newsData[index]["description"];
      newsObject['url'] = this.state.newsData[index]["url"];
      newsObject['urlToImage'] = this.state.newsData[index]["urlToImage"];
      newsObject['publishedAt'] = this.state.newsData[index]["publishedAt"];
      newsObjectList.push(newsObject);
    }
    console.log(newsObjectList);
    console.log(this.props);
    return(
      <Card>
        <Card.Header>News</Card.Header>
        <Card.Body>
          {newsObjectList.map(this.renderNews)}
        </Card.Body>
      </Card>
    );
  }
}

export default News;
