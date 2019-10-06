import React, { useState, useEffect, Fragment } from "react";
import { Button, Card, Row, Col, Icon } from "antd";

const { Meta } = Card;

export default function CartList(props) {
  const [addToCart, setAddToCart] = useState({
    list: props.list
  });

  return (
    <Fragment>
      {/* <Button onClick={() => props.update("Count")}>Click For Update</Button> */}

      <div style={{ direction: "rft" }}>
        <Row gutter={10}>
          {addToCart.list.map(item => (
            <Col xs={20} sm={16} md={12} lg={8} xl={4}>
              <Card
                hoverable
                actions={[
                  <Icon
                    type="shopping-cart"
                    onClick={() => props.update({ item: item })}
                  />
                ]}
                style={{ width: 200 }}
                cover={<img alt="example" src={item.img} />}
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Fragment>
  );
}
