/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React, {
  Fragment,
  useState,
  useEffect,
} from 'react';

/* [+] MaterialUI imports */
import {
  LoadingButton,
} from '@mui/lab';
import {
  Icon,
} from '@iconify/react';

const SubmitButton = ({
  loading = false,
  shouldShowSuccessState = false,
  shouldShowErrorState = false,
  disabledOnSuccess = false,
  disabledOnError = false,
  disabledOnDefault = false,
  sx = {},
  nbClick = 0,
  onClick = () => {},
  defaultContent = <></>,
  errorContent = <></>,
  successContent = <></>,
  defaultColor = 'primary',
  successColor = 'success',
  errorColor = 'error',
  defaultIcon = <Icon icon="mdi:check" />,
  successIcon = <Icon icon="mdi:check" />,
  errorIcon = <Icon icon="mdi:close-circle-outline" />,
  type = 'submit',
  fullWidth = true,
  variant = 'contained',
  size = 'large',
}) => {
  const [showErrorState, setShowErrorState] = useState(false);
  const [lastNbClick, setLastNbClick] = useState(0);

  useEffect(() => {
    setLastNbClick(nbClick);
  }, [nbClick]);

  useEffect(() => {
    const timer = null;
    if (shouldShowErrorState && (nbClick > lastNbClick)) {
      setShowErrorState(true);
      setTimeout(() => {
        setShowErrorState(false);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [shouldShowErrorState, nbClick, lastNbClick]);

  const checkedErrorColor = showErrorState
    ? errorColor
    : defaultColor;

  const checkedSuccessColor = shouldShowSuccessState
    ? successColor
    : defaultColor;

  const color = showErrorState
    ? checkedErrorColor
    : checkedSuccessColor;

  const checkedErrorIcon = showErrorState
    ? errorIcon
    : defaultIcon;

  const checkedSuccessIcon = shouldShowSuccessState
    ? successIcon
    : defaultIcon;

  const icon = showErrorState
    ? checkedErrorIcon
    : checkedSuccessIcon;

  const checkedErrorIsDisabled = showErrorState
    ? disabledOnError
    : disabledOnDefault;

  const checkedSuccessIsDisabled = shouldShowSuccessState
    ? disabledOnSuccess
    : disabledOnDefault;

  const isDisabled = showErrorState
    ? checkedErrorIsDisabled
    : checkedSuccessIsDisabled;

  const checkedErrorContent = showErrorState
    ? errorContent
    : defaultContent;

  const checkedSuccessContent = shouldShowSuccessState
    ? successContent
    : defaultContent;

  const content = showErrorState
    ? checkedErrorContent
    : checkedSuccessContent;

  return (
    <LoadingButton
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      endIcon={icon}
      disabled={isDisabled}
      sx={{ ...sx }}
      loading={loading}
    >
      {content}
    </LoadingButton>
  );
};

export default SubmitButton;
