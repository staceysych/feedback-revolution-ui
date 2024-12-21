import { EntityType } from "@/app/types/common";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { RefObject } from "react";

interface ArchiveDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onArchive: () => void;
  cancelRef: RefObject<HTMLButtonElement>;
  entityType: EntityType;
}

const ArchiveDialog = ({
  isOpen,
  onClose,
  onArchive,
  cancelRef,
  entityType,
}: ArchiveDialogProps) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Archive {entityType}
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? This {entityType.toLowerCase()} will no longer be visible in the dashboard.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} variant="outline">
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onArchive} ml={3}>
              Archive
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ArchiveDialog; 