import React, { Component } from "react";

//import d3 from 'd3';
import * as d3 from 'd3';
import data from './data2';

import classes from "./d3.css";
class CreateCustomer extends Component {
  state = {

    pagePosts: []
  };
  componentDidMount(){
    // this.draw()
  }


<script>

var data = [4, 8, 15, 16, 23, 42];

var width = 420,
barHeight = 20;

var x = d3.scale.linear()
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

</script>

  myfunction() {



    var width = 420,
        barHeight = 20;

    var x = d3.scaleLinear()
        .range([0, width]);

    var chart = d3.select(".chart")
        .attr("width", width);

    // d3.json(data,  (error, data)  => {


    x.domain([0, d3.max(this.state.pagePosts, function (d) {



      // data.push(d.page_posts);




      return d;
    })]);




    chart.attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function (d, i) {
          return "translate(0," + i * barHeight + ")";
        });

    bar.append("rect")
        .attr("width", function (d) {
          return x(d.value);
        })
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function (d) {
          return x(d.value) - 3;
        })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function (d) {
          return d.value;
        });
    //  });

    function type(d) {
      d.value = +d.value; // coerce to number
      return d;
    }
  }
  page_posts() {

    console.log('lamo')
    //  d3.json(data, (error, data) =>  {
    console.log('data is',data[0].granular);
    var pagePosts = [];
    for(var i = 0; i<= data[0].granular.length - 1; i++) {
      console.log('individual data is ', data[0].granular[i].page_posts);
      this.state.pagePosts.push(data[0].granular[i].page_posts);

    }
    console.log('final data is ',pagePosts);

    this.myfunction();

    /*   this.setState({
        state: {
          ...this.state,
          pagePosts : pagePosts

        }
      }); */
    // console.log(data.)

    // document.getElementById("demo").innerHTML = data.aggregated.page_posts;
    // });
  }

  demo() {
    console.log('value is', this.state.pagePosts )
  }




  render() {

    return (
        <div>
          <button onClick={this.myfunction.bind(this)}>The data is </button>



          <button onClick={this.page_posts.bind(this)}>page_posts </button>
          <button onClick={this.demo.bind(this)}>demo </button>

          <p id="demo"></p>

          <svg className="chart" width="960" height="500" style={{border:'solid 1px       #eee',borderBottom:'solid 1px #ccc'}} />
        </div>
    );
  }
}
export default CreateCustomer;
