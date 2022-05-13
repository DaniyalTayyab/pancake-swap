import usageUser from "../assets/usageUeser.PNG";
import usageTrade from "../assets/usageTrade.PNG";
import usageStaked from "../assets/usageStaked.PNG";

const data = [
  {
    photo: usageUser,
    price: "2.8 million",
    label: "users",
    quantity: "in the last 30 days",
  },
  {
    photo: usageTrade,
    price: "38 million",
    label: "trades",
    quantity: "made in the last 30 days",
  },
  {
    photo: usageStaked,
    price: "$4.3 billion",
    label: "staked",
    quantity: "Total Value Locked",
  },
];

export function usageCardData() {
  return data;
}
