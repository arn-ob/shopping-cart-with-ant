import React, { Fragment, useState, useEffect } from "react";
import { Drawer, Button, Row, Col } from "antd";

export default function Drawers(props) {
  const [addedList, setAddedList] = useState({
    shoppingCartList: props.shoppingCart,
    drawerVisible: false
  });

  useEffect(() => {
    console.log("count changed", props.shoppingCart);
    setAddedList({
      shoppingCartList: props.shoppingCart
    });
  }, [props.shoppingCart]);

  function update() {
    console.log("Get Update");
    setAddedList({
      ...addedList,
      drawerVisible: addedList.drawerVisible ? false : true
    });
  }

  console.log("shoppingCartList", addedList.shoppingCartList);

  const DescriptionItem = ({ title, content, url }) => (
    <div
      style={{
        fontSize: 14,
        lineHeight: "22px",
        marginBottom: 7,
        color: "rgba(0,0,0,0.65)"
      }}
    >
      <img src={url} alt="example" width="50" height="50" />
      <p
        style={{
          marginLeft: 8,
          display: "inline-block",
          color: "rgba(0,0,0,0.85)"
        }}
      >
        {title}
      </p>
    </div>
  );

  return (
    <Fragment>
      <Button onClick={update}>
        {addedList.shoppingCartList.length === 0
          ? "Cart List"
          : "Added cart " + addedList.shoppingCartList.length}
      </Button>
      <Drawer
        title="Added Cart List"
        width={250}
        placement="right"
        closable
        onClose={() => setAddedList({ ...addedList, drawerVisible: false })}
        visible={addedList.drawerVisible}
      >
        {addedList.shoppingCartList.map(item => (
          // <p>{item.item.title}</p>
          <Row>
            <Col span={12}>
              <DescriptionItem
                title={item.item.title}
                content={item.item.description}
                url={item.item.img}
              />
            </Col>
          </Row>
        ))}

        {addedList.shoppingCartList.length === 0 ? null : (
          <Fragment>
            <Button type="primary" style={{ margin: 5 }}>
              Procced
            </Button>
            <Button
              type="primary"
              style={{ margin: 5 }}
              onClick={() => props.clear()}
            >
              Clear
            </Button>
          </Fragment>
        )}
      </Drawer>
    </Fragment>
  );
}
