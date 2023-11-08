import { Card } from "antd";
function CardComp(props) {
  const { Meta } = Card;
  const { url, alt, title, desc } = props;
  return (
    <Card
      hoverable
      style={{
        width: 250,
      }}
      cover={<img alt={alt} src={url} height={200} width={50} />}
    >
      <Meta title={title} description={desc} />
    </Card>
  );
}

export default CardComp;
