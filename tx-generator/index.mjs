import { ethers } from "ethers";
import "dotenv/config";
(async () => {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8547"); // Rollup RPC URL
  const signer = new ethers.Wallet(process.env.NODE_PRIVKEY, provider);

  const tx = await signer.sendTransaction({
    to: "0xf03a2B6ab819DeFcD4265D1cCE81565C5eB4E49F",
    value: ethers.parseUnits("1", "wei"),
    gasPrice: ethers.parseUnits("1", "gwei"),
    gasLimit: 26000,
  });
  console.log(tx);
})();
