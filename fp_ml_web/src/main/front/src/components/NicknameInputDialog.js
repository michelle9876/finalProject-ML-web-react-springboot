import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  TextField, 
  Button, 
  Snackbar, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Typography,
  Box
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import RobotIcon from '@mui/icons-material/SmartToy'; // 로봇 아이콘

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NicknameInput = () => {
  const [nickname, setNickname] = useState('');
  const [userId, setUserId] = useState(null);
  const [openSuccessToast, setOpenSuccessToast] = useState(false);
  const [openErrorToast, setOpenErrorToast] = useState(false);
  const [openDialog, setOpenDialog] = useState(true);

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    const savedUserId = localStorage.getItem('userId');
    if (savedNickname && savedUserId) {
      setNickname(savedNickname);
      setUserId(savedUserId);
      setOpenDialog(false);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/user/nickname', { nickName: nickname });
      if (response.status === 200) {
        setUserId(response.data.userId);
        localStorage.setItem('nickname', response.data.nickName);
        localStorage.setItem('userId', response.data.userId);
        setOpenSuccessToast(true);
        setOpenDialog(false);
      }
    } catch (error) {
      console.error('Error submitting nickname:', error);
      setOpenErrorToast(true);
    }
  };

  const handleCloseSuccessToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccessToast(false);
  };

  const handleCloseErrorToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenErrorToast(false);
  };

  return (
    <>
      <Dialog open={openDialog} onClose={() => {}} aria-labelledby="nickname-dialog-title">
        <DialogTitle id="nickname-dialog-title">
          <Box display="flex" flexDirection="column" alignItems="center">
            <RobotIcon style={{ fontSize: 60, marginBottom: 10 }} />
            <Typography variant="h6">안녕하세요! 맞춤추천을 해드릴게요</Typography>
            <Typography variant="subtitle1">우선 닉네임을 입력해주세요</Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nickname"
            label="닉네임 입력"
            type="text"
            fullWidth
            variant="outlined"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary" variant="contained" fullWidth>
            확인
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openSuccessToast} autoHideDuration={6000} onClose={handleCloseSuccessToast}>
        <Alert onClose={handleCloseSuccessToast} severity="success" sx={{ width: '100%' }}>
          {nickname}님 반갑습니다!
        </Alert>
      </Snackbar>
      <Snackbar open={openErrorToast} autoHideDuration={6000} onClose={handleCloseErrorToast}>
        <Alert onClose={handleCloseErrorToast} severity="error" sx={{ width: '100%' }}>
          오류입니다. 다시 입력해주세요.
        </Alert>
      </Snackbar>
    </>
  );
};

export default NicknameInput;