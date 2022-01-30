import React from "react";
import { Text } from "react-native";
import { useTailwind } from "tailwind-rn";

export const Home = () => {
  const tw = useTailwind();
  return (
    <Text
      style={tw(
        "text-cyan-800 mt-8 self-center bg-cyan-200 text-center w-32 px-2 p-1 rounded-xl"
      )}
    >
      Hello from VG !
    </Text>
  );
};
