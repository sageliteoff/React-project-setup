import Post from "../components/post";
import DI from "../di-container";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { PostEntity } from "../respositories/post-repository";

export default function Posts() {
  const [groupedPost, setPosts] = useState<PostEntity[][]>([]);

  const getPost = async () => {
    const postsRes = await DI.postService.getAllPost();

    const chunkSize = 3;
    const chuckedPost: PostEntity[][] = [];
    for (let i = 0; i < postsRes.length; i += chunkSize) {
      const chunk = postsRes.slice(i, i + chunkSize);
      chuckedPost.push(chunk);
    }
    setPosts(chuckedPost);
  };

  return (
    <>
      <Container>
        <div className="text-center my-3">
          <Button onClick={getPost}>Fetch POSTS</Button>
        </div>

        {groupedPost.map((posts, index) => (
          <Row key={index} className="mb-3">
            {posts?.map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </Row>
        ))}
      </Container>
    </>
  );
}
