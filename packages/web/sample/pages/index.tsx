import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Combine, Select } from "@kinam/share";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button>기남</Button>
      <Combine />
      <Select />
    </div>
  );
}
