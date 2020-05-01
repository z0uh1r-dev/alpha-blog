import React from "react";
import PropTypes from "prop-types";
import Timestamp from "react-timestamp";

class Article extends React.Component {

  componentDidMount() {
    const self = this;
    
    setInterval(function() {
      self.forceUpdate();
    }, 5000);
  }

  componentWillUnmount() {
    if(this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  render () {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="well well-lg">
              <div className="article-title">
                <a href={this.props.path}>{this.props.title}</a>
              </div>
              <div className="article-body">
                {this.props.description}
                <div className="article-meta-details">
                    <small>Created by: {this.props.author},
                    &nbsp;
                    <Timestamp relative date={this.props.createdAt} precision={3} autoUpdate/>,
                    &nbsp;
                    last updated: <Timestamp relative date={this.props.updatedAt} precision={3} autoUpdate/></small>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};
export default Article
