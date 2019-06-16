import React, { Component } from "react";
import * as d3 from 'd3';
import data from './data2';
import classes from "./d3.css";
import Button from '@material-ui/core/Button';
class CreateCustomer extends Component {
  state = {

    pagePosts: [],
    userPosts: [],
    visName: '',
    peoplePosts: []
  };
  componentDidMount(){
    // this.draw()
  }
  PagePostsfunction() {
    var data = this.state.pagePosts;

    var width = 420,
        barHeight = 20;

    var x = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, width]);

    var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });
  }
  UserPostsfunction() {
    var data = this.state.userPosts;

    var width = 420,
        barHeight = 20;

    var x = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, width]);

    var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });
  }

  page_posts() {
    console.log('lamo')
    console.log('data is', data[0].granular);
    var pagePosts = [];

    for (var i = 0; i <= data[0].granular.length - 1; i++) {
      console.log('individual data is ', data[0].granular[i].page_posts);


      pagePosts.push(data[0].granular[i].page_posts);
    }

    this.setState({
      ...this.state,
      pagePosts: pagePosts,
      visName: "User Posts Visualization"
    });
    console.log('final data is ');
    this.PagePostsfunction();
  }
  user_posts() {
    console.log('lamo')
    console.log('data is', data[0].granular);
    var userPosts = [];
    for (var i = 0; i <= data[0].granular.length - 1; i++) {
      console.log('individual data is ', data[0].granular[i].user_posts);
      userPosts.push(data[0].granular[i].user_posts);
    }
    this.setState({
      ...this.state,
      userPosts: userPosts,
      visName: "User Posts Visualization"
    });
    console.log('final data is ');
      this.UserPostsfunction();


  }
  peopleTalkingfunction() {
    var data = this.state.peoplePosts;

    var width = 420,
        barHeight = 20;

    var x = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, width]);

    var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });
  }

  people_talking() {
    console.log('lamo')
    console.log('data is', data[0].granular);
    console.log('data is', data[0]);
    var peoplePosts = [];
    for (var i = 0; i <= data[0].granular.length - 1; i++) {
      console.log('individual data is ', data[0].granular[i].people_talking);
      peoplePosts.push(data[0].granular[i].people_talking);
    }
    this.setState({
      ...this.state,
      peoplePosts: peoplePosts,
      visName: "People Talking Visualization"
    });
    console.log('final data is ');
    this.peopleTalkingfunction();
  }

  undraw() {

      window.location.reload();
  }
  render() {
    return (
        <div>

          <Button variant="contained" color="primary" onClick={this.page_posts.bind(this)}>Page posts </Button>
          <Button variant="contained" color="primary" onClick={this.user_posts.bind(this)}>User Posts </Button>
          <Button variant="contained" color="primary" onClick={this.people_talking.bind(this)}> People Talking</Button>
          <Button variant="contained" color="primary" onClick={this.undraw.bind(this)}> Refresh And Click</Button>
          <p id="demo"></p>
          <p className='Name'> { this.state.visName }</p>
          <svg className="chart" width="1500" height="800" style={{border:'solid 1px       #eee',borderBottom:'solid 1px #ccc'}} />
        </div>
    );
  }
}
export default CreateCustomer;
