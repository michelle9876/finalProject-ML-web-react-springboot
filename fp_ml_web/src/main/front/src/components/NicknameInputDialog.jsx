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
  Box,
  CircularProgress
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import RobotIcon from '@mui/icons-material/SmartToy';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NicknameInput = () => {
  const [nickname, setNickname] = useState('');
  const [userId, setUserId] = useState(null);
  const [openSuccessToast, setOpenSuccessToast] = useState(false);
  const [openErrorToast, setOpenErrorToast] = useState(false);
  const [openDialog, setOpenDialog] = useState(true);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
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
    } finally {
      setLoading(false);
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

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
            disabled={loading}
          />
        </DialogContent>
        <DialogActions>
          <Box width="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Button 
              onClick={handleSubmit} 
              color="primary" 
              variant="contained" 
              fullWidth 
              disabled={loading}
              // style={{ marginBottom: loading ? '16px' : '0' }}
            >
              {loading ? '곧 시작돼요...' : '확인'}
            </Button>
            
            {/* <Button 
              onClick={handleCloseDialog} 
              color="inherit" 
              variant="contained" 
              fullWidth 
              disabled={loading}
              style={{ marginTop: '8px' }}
            >
              취소
            </Button> */}
          </Box>
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