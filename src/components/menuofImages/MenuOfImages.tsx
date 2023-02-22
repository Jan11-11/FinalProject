import { useAppDispatch,useAppSelector } from '../../hooks';
import "./menuOfImages.scss"
export function MenuOfImages() {

    const dispatch=useAppDispatch();
    const uploadedImage=useAppSelector((state)=>state.membersFullInfo.uploadedImage);


  return (
    <div className='MenuOfImages'>
        <h1>Նախնտրելի նկար</h1>
    </div>
  )
}
