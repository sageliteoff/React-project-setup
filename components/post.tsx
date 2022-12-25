import { PostEntity } from "../respositories/post-repository";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

type PostProps = {
  post: PostEntity;
};
export default function Post({ post }: PostProps) {
  return (
    <Col lg="4">
      <Card>
        <Card.Img
          variant="top"
          src={`https://picsum.photos/seed/${post.id}/100/40`}
        />
        <Card.Body>
          <Card.Title>{post.title} </Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
