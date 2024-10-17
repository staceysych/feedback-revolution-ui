"use client";
import { Container, Heading, Stack, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import WidgetIcon from "@/app/assets/WidgetIcon.png";
import { motion } from "framer-motion";

const WidgetSection = () => {
  return (
    <Container pos={"relative"} overflow={"hidden"}>
      <Stack align={"center"} py={12} gap={8}>
        <Heading as={"h2"} size={"xl"} textAlign={"center"} maxW={580}>
          Collect reviews, ideas and issues directly from your website
        </Heading>
        <Text fontWeight={"bold"} maxW={600} textAlign={"center"}>
          Engage with your customers in real time, gather valuable insights with
          our easy to integrate widget
        </Text>
        <Image src={WidgetIcon} alt="Widget icon" priority={true} />
      </Stack>
      <motion.div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          zIndex: -1,
          top: "-36px",
          left: "50%",
          background:
            "linear-gradient(0deg, #C3B2EA 0%, rgba(247, 221, 221, 0.6) 100%)",
        }}
        initial={{ transform: "translateX(-50%) scale(0)" }}
        whileInView={{ transform: "translateX(-50%) scale(1)" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      />
    </Container>
  );
};

export default WidgetSection;
