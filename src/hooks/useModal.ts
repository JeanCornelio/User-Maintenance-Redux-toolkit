

import { toggleModal } from '../store/modal/slice'
import { useAppDispatch, useAppSelector } from './store'

export const useModal = () => {
    const dispatch = useAppDispatch()
    const openModal = useAppSelector((state)=> state)
   
    const setOpenModal =(value: boolean)=>{
       
        dispatch(toggleModal(value))
    }

  return {
    setOpenModal,
    openModal : openModal.modal
  }
}
