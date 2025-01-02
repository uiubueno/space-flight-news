import React from "react";
import "./styles.css";

export class Article extends React.Component {
  render() {
    return (
      <article id="article">
        <img src={this.props.thumbnail} alt={this.props.tile} />
        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>
          <p>{this.props.description}</p>
        </div>
      </article>
    );
  }
}
