import React from "react";

class Tabs extends React.Component {
    static defaultProps = {
      tabs: [],
    };
    state = {
      currentTabIndex: 0
    };
    /* not showing all the methods */
    render() {
      const currentTab = this.props.tabs[this.state.currentTabIndex]
      return (
        <div className='content'>
          {currentTab.content}
        </div>
      )
    }
    /* not showing all the methods */
  }

export default Tabs;