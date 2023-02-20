import React from 'react'
import { useAppDispatch,useAppSelector } from '../../hooks';

function MenuOfImages() {
    const dispatch=useAppDispatch();
    const uploadedImage=useAppSelector((state)=>state.membersFullInfo.uploadedImage);
  return (
    <div>
        <h1>Նախնտրելի նկար</h1>
    </div>
  )
}

export default MenuOfImages