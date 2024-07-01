import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Icon } from 'antd';

class Sider extends React.Component {
  state = {
    msg: '???',
  };
  handleClick = (e) => {
    console.log('click ', e);
    const dom = document.querySelector(`.${e.key}`);
    dom &&
      dom.scrollIntoView({
        behavior: 'smooth', // 平滑滚动
        block: 'start', // 垂直居中
        inline: 'nearest', // 水平方向上尽可能靠近视口中心
      });
    console.log('click ', dom);
    this.setState({ msg: `.${e.key}` });
  };
  renderItem = (length) => {
    const arr = Array.from({ length }, (_, index) => index);
    let arrDom = arr.map((i, index) => {
      return <div class="itemcontent">{index + 1}</div>;
    });
    return arrDom;
  };

  render() {
    const { msg } = this.state;
    return (
      <div>
        <div className="nav"></div>
        <div class="allwrap">
          <div class="leftwrap">
            <Menu
              onClick={this.handleClick}
              style={{ width: 256 }}
              className="Menu"
              defaultSelectedKeys={['Option1']}
              mode="inline"
            >
              <Menu.Item key="Option1">Option 1</Menu.Item>
              <Menu.Item key="Option2">Option 2</Menu.Item>
              <Menu.Item key="Option3">Option 3</Menu.Item>
              <Menu.Item key="Option4">Option 4</Menu.Item>
            </Menu>
          </div>
          <div class="rightwrap">
            <div class="itemtitle1 Option1">我是title-Option1---{msg}</div>
            <div class="itemwrap">{this.renderItem(26)}</div>
            <div class="itemtitle1 Option2">我是title2-Option2</div>
            <div class="itemwrap">{this.renderItem(16)}</div>
            <div class="itemtitle1 Option3">我是title2-Option3</div>
            <div class="itemwrap">{this.renderItem(22)}</div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Sider />, document.getElementById('container'));
