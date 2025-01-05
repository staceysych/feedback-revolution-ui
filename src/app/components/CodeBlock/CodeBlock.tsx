'use client'

import { Box, IconButton, useClipboard, useToast } from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";
import { useEffect, useRef } from "react";
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import './codeblock.css';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = 'tsx' }: CodeBlockProps) => {
  const { onCopy } = useClipboard(code);
  const toast = useToast();
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Code copied",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box 
      position="relative" 
      fontSize="sm"
      borderRadius="md"
      overflow="hidden"
      bg="gray.800"
    >
      <IconButton
        aria-label="Copy code"
        icon={<FiCopy />}
        size="sm"
        position="absolute"
        top={2}
        right={2}
        onClick={handleCopy}
        bg="gray.700"
        color="white"
        _hover={{ bg: "gray.600" }}
        zIndex={1}
      />
      <pre 
        ref={codeRef}
        className={`language-${language}`}
        style={{ 
          margin: 0,
          padding: '1rem',
          backgroundColor: 'transparent',
          overflow: 'auto'
        }}
      >
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </Box>
  );
};

export default CodeBlock; 