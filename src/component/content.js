import React, { useState, useEffect, Fragment } from "react";
import { Button, Card, Row, Col, Icon } from "antd";

const { Meta } = Card;

export default function CartList(props) {
  const [addToCart, setAddToCart] = useState({
    list: [1, 2, 3, 4, 5]
  });

  return (
    <Fragment>
      {/* <Button onClick={() => props.update("Count")}>Click For Update</Button> */}

      {addToCart.list.map(item => (
        <Row gutter={64}>
          <Col span={4} style={{ margin: 10 }}>
            <Card
              hoverable
              actions={[
                <Icon
                  type="shopping-cart"
                  onClick={() => props.update({ c: item })}
                />,
                <Icon type="delete" />
              ]}
              style={{ width: 240, margin: 10 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={2} />
          <Col span={4} style={{ margin: 10 }}>
            <Card
              hoverable
              actions={[
                <Icon
                  type="shopping-cart"
                  onClick={() => props.update([{ c: item }])}
                />,
                <Icon type="delete" />
              ]}
              style={{ width: 240, margin: 10 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={2} />
          <Col span={4} style={{ margin: 10 }}>
            <Card
              hoverable
              actions={[
                <Icon
                  type="shopping-cart"
                  onClick={() => props.update([{ c: item }])}
                />,
                <Icon type="delete" />
              ]}
              style={{ width: 240, margin: 10 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      ))}
    </Fragment>
  );
}
