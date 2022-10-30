import React,{useState} from 'react' 

export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [passwordVisibilityConfirm, setPasswordVisibilityConfirm] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye-with-line');
    const [rightIconConfirm, setRightIconConfirm] = useState('eye-with-line');
  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye-with-line') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye') {
        setRightIcon('eye-with-line');
        setPasswordVisibility(!passwordVisibility);
      }
    };

    const handlePasswordVisibilityConfirm = () => {
      if (rightIconConfirm === 'eye-with-line') {
        setRightIconConfirm('eye');
        setPasswordVisibilityConfirm(!passwordVisibilityConfirm);
      } else if (rightIconConfirm === 'eye') {
        setRightIconConfirm('eye-with-line');
        setPasswordVisibilityConfirm(!passwordVisibilityConfirm);
      }
    };
  
    return {
      passwordVisibility,
      passwordVisibilityConfirm,
      rightIcon,
      rightIconConfirm,
      handlePasswordVisibility,
      handlePasswordVisibilityConfirm
    };
  };