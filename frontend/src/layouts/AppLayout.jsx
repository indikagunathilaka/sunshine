import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import AppHeader from "../components/AppHeader";
import Auth from "../modules/Auth";

import logo from "../logo.png";
import "./layout.css";

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          breakpoint="lg"
          width={256}
          theme="light"
        >
          <div className="logo" id="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
              {this.state.collapsed ? null : <h1>Sunshine Admin</h1>}
            </Link>
          </div>
          <Menu key="mainMenu" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="customerTypes">
              <Link to="/customer-types">
                <Icon type="plus-square" />
                <span>Customer Types</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="deliveryTypes">
              <Link to="/delivery-types">
                <Icon type="hdd" />
                <span>Delivery Types</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="paymentTypes">
              <Link to="/payment-types">
                <Icon type="export" />
                <span>Payment Types</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="roles">
              <Link to="/roles">
                <Icon type="lock" />
                <span>Roles</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="users">
              <Link to="/users">
                <Icon type="user" />
                <span>Users</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <div className="header">
              <span className="trigger">
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
              </span>
              <div className="right">
                <AppHeader />
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Sunshine Admin © 2019 Bottleneck Solutions
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
