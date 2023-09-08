import { useState } from 'react'

const useDisclosure = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClose = () => {
        setIsOpen(false)
    };

    const onOpen = () => {
        setIsOpen(true)
    }

    const toggle = () => {
        setIsOpen(!isOpen)

    }


    return {
        isOpen,
        onClose,
        toggle,
        onOpen

    }


}

export default useDisclosure