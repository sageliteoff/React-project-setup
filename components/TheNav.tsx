import Nav from "react-bootstrap/Nav";

export default function TheNav() {
  return (
    <>
      <Nav
        activeKey="/"
        className="justify-content-center the-nav "
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/facts">Facts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/posts">Posts</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
