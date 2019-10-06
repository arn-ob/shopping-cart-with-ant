import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles.css";
import { Layout, message, Menu, Icon, Row, Col } from "antd";

// Component Import
import CartList from "./component/content";
import Drawers from "./component/drawer";

const { Header, Content } = Layout;

document.title = "Shopping Cart Demo";

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

  const list = [
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Item 1",
      description: "item 1 details"
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Item 2",
      description: "item 2 details"
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Item 3",
      description: "item 3 details"
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Item 4",
      description: "item 4 details"
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Item 4",
      description: "item 4 details"
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Item 4",
      description: "item 4 details"
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Item 4",
      description: "item 4 details"
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Item 4",
      description: "item 4 details"
    }
  ];

  console.log("Cart List", cart.shoppingCart);

  return (
    <Layout>
      <Header className="header">
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
            <Drawers
              shoppingCart={cart.shoppingCart}
              clear={() => {
                setCart({ ...cart, shoppingCart: [] });
                message.destroy();
                message.info("Cart Clear");
              }}
            />

            {/* <Button
              onClick={() => console.log("asd")}
              className="ant-dropdown-link"
              href="#"
            >
              {cart.shoppingCart.length === 0
                ? "Cart List"
                : "Added cart " + cart.shoppingCart.length}
            </Button> */}
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "0 50px", height: "auto" }}>
        <Layout style={{ background: "#fff" }}>
          <Content>
            <CartList update={updateField} list={list} />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
