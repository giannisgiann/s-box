import React from 'react';


export default class Progress extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        scrolled: 0
      };
    }
  
    componentDidMount() {
      window.addEventListener("scroll", this.scrollProgress);
    }
  
    componentWillUnmount() {
      window.removeEventListener("scroll", this.scrollProgress);
    }
  
    scrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = `${scrollPx / winHeightPx * 100}%`;
  
    //   console.log(scrolled);
  
      this.setState({
        scrolled: scrolled
      });
    };
  
    render() {
      const progressContainerStyle = {
        background: "#ffffff00",
       
        height: "7px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 999999999999
      };
  
      const progressBarStyle = {
        height: "7px",
        background: "linear-gradient(to right, #d53369, #009FFF)",
        width: this.state.scrolled
      };
  
      return (
         <div className="progress-container" style={progressContainerStyle}>
            <div className="progress-bar" style={progressBarStyle} />
          </div>
      );
    }
  }
  
  