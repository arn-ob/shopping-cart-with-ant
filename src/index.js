import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles.css";
import {
  Layout,
  message,
  Menu,
  Breadcrumb,
  Icon,
  Row,
  Col,
  Button,
  Dropdown
} from "antd";

// Component Import
import CartList from "./component/content";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);

function App() {
  const [cart, setCart] = useState({
    shoppingCart: []
  });

  useEffect(() => {
    console.log("list", cart.shoppingCart.length);
  });

  const updateField = e => {
    console.log("Check 1", e);
    message.destroy();
    message.info("Added to cart");
    setCart({
      ...cart,
      shoppingCart: [...cart.shoppingCart, e]
    });
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Row>
          <Col span={8}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">Cart Demo</Menu.Item>
            </Menu>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
              {cart.shoppingCart.length === 0
                ? "Cart List"
                : "Added cart " + cart.shoppingCart.length}
            </Dropdown.Button>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "0 50px", height: "auto" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ background: "#fff" }}>
          <Content>
            <CartList update={updateField} listcount={4} />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
