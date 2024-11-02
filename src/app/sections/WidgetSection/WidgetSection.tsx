"use client";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FeedbackWidget } from "feedback-evolution-widget-react";

import "feedback-evolution-widget-react/styles.css";

const WidgetSection = () => {
  return (
    <Container pos={"relative"} overflow={{ base: "hidden", md: "unset" }}>
      <Stack align={"center"} py={12} gap={8}>
        <Heading as={"h2"} size={"xl"} textAlign={"center"} maxW={580}>
          Collect reviews, ideas and issues directly from your website
        </Heading>
        <Text maxW={600} textAlign={"center"}>
          Engage with your customers in real time and collect valuable insights
          using our easy-to-integrate feedback widget.
        </Text>
        <FeedbackWidget
          projectId={process.env.NEXT_PUBLIC_PROJECT_ID || ""}
          closable={false}
          open
        />
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
