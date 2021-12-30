<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
  <Col span={24} md={12} xl={8} key={i.id}>
    <ProductItem
      id={i.id}
      title={i.title}
      price={i.price}
      image={i.image}
      rating={i.rating}
    ></ProductItem>
  </Col>
</Row>;
