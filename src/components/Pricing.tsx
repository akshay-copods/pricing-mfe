import { Card } from "antd";
import "antd/dist/reset.css";
import "../index.css";
import "./pricing.css";

// @ts-ignore
import useStore from "container/store";

const Counter = () => {
  const { user, isLoggedIn } = useStore();

  if (true) {
    return (
      <Card
        className="pricing-card"
        title="Pricing"
        bordered={false}
        style={{ width: 300 }}
      >
        {isLoggedIn ? user.name + "is logged in" : "Not logged in"}
      </Card>
    );
  }
};

export default Counter;
