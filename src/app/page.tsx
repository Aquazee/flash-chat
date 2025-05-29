import ChatBox from "@/domain/chatbox";
import Sidebar from "@/domain/sidebar";
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Home() {
  return (
      <Container>
        <Row>
          <Sidebar />
          <ChatBox />
        </Row>
      </Container>
  );
}
