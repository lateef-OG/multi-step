import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

interface ModalViewProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const ModalView = ({isOpen, onClose, children}: ModalViewProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalView;
