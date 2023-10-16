import Frame from "../../../common/Frame";
import Content from "./Content";
import Header from "./Header";
import Progress from "./Progress";

function CircleProgress() {
  return (
    <Frame>
      <Header />
      <Content>
        <Progress />
      </Content>
    </Frame>
  );
}

export default CircleProgress;
