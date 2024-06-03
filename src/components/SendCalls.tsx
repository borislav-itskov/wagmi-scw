import { useSendCalls } from "wagmi/experimental";
import { parseUnits } from "viem";

export function SendCalls() {
  const { sendCalls } = useSendCalls();

  return (
    <div>
      <h2>Swap in one</h2>
      <button
        onClick={() =>
          sendCalls({
            calls: [
              {
                to: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
                data: "0x095ea7b3000000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c80000000000000000000000000000000000000000000000000000000000002710",
              },
              {
                to: "0xba12222222228d8ba445958a75a0704d566bf2c8",
                data: "0x945bcec90000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000003000000000000000000000000003f791753727536bf1a4cb87334997d72435a226700000000000000000000000000000000000000000000000000000000000000000000000000000000000000003f791753727536bf1a4cb87334997d72435a226700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000380000000000000000000000000000000000000000000000000000000006655cf86000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000100fb7c21f274139011dab38898ba66401d111144350002000000000000000000c300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000271000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000cde67b70e8144d7d2772de59845b3a67266c2ca700020000000000000000000900000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda0291300000000000000000000000050c5725949a6f0c72e6c4a641f24049a917db0cb0000000000000000000000007c6b91d9be155a6db01f749217d76ff02a7227f2000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000027100000000000000000000000000000000000000000000000000000000000000000fffffffffffffffffffffffffffffffffffffffffffffffffffffa82b0991bd3",
              },
            ],
          })
        }
      >
        Balancer, Base: Approve & Swap
      </button>
    </div>
  );
}
