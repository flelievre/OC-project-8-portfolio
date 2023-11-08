import React from 'react';
import {
  SubmitButton,
} from '../../components';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Box,
  TextField,
} from '@mui/material';
import useContactPage from './ContactPage.logic/useContactPage';
import {
  Icon,
} from '@iconify/react';

const ContactPage = () => {
  const {
    t,
    isAppLoading,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    message,
    setMessage,
    handleContactPageForm,
    firstNameErrorHelper,
    lastNameErrorHelper,
    emailErrorHelper,
    messageErrorHelper,
    hasAnError,
    nbFormSubmissionCounter,
    phoneNumber,
    setPhoneNumber,
    isSent,
  } = useContactPage();

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Typography
        component="h1"
        variant="h3"
        align="center"
        sx={{
          mt: 5,
        }}
      >
        {t('Request a web development service provision')}
      </Typography>
      <Typography
        component="h2"
        variant="h6"
        align="center"
        sx={{
          mb: 5,
        }}
      >
        {t('I will be delighted to help you develop your web project')}
      </Typography>
      <Container
        component="section"
        maxWidth="md"
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleContactPageForm}
          sx={{ mt: 3 }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
          >
            <Grid item xs={6} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label={t('First name')}
                autoFocus
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
                variant="outlined"
                error={!!firstNameErrorHelper}
                helperText={firstNameErrorHelper}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label={t('Last name')}
                name="lastName"
                value={lastName}
                onChange={({ target }) => setLastName(target.value)}
                autoComplete="lname"
                variant="outlined"
                error={!!lastNameErrorHelper}
                helperText={lastNameErrorHelper}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="email"
                label={t('Email')}
                name="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                autoComplete="email"
                variant="outlined"
                error={!!emailErrorHelper}
                helperText={emailErrorHelper}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="phoneNumber"
                label={t('Phone number')}
                name="phoneNumber"
                value={phoneNumber}
                onChange={({ target }) => setPhoneNumber(target.value)}
                autoComplete="phoneNumber"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                minRows={5}
                name="message"
                label={t('Message')}
                value={message}
                onChange={({ target }) => setMessage(target.value)}
                id="message"
                variant="outlined"
                error={!!messageErrorHelper}
                helperText={messageErrorHelper}
              />
            </Grid>
          </Grid>
          <SubmitButton
            shouldShowErrorState={hasAnError}
            shouldShowSuccessState={isSent}
            successContent={t('Sent')}
            nbClick={nbFormSubmissionCounter}
            defaultContent={t('Send')}
            errorContent={t('Error')}
            defaultColor="primary"
            successColor="success"
            defaultIcon={<Icon icon="ion:mail-outline" />}
            errorColor="error"
            loading={isAppLoading}
            sx={{ mt: 2, mb: 5 }}
          />
        </Box>
      </Container>
    </Grid>
  );
};

export default ContactPage;
