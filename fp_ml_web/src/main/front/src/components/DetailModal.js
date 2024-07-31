import React from 'react';
import { Modal, Box, Typography, CircularProgress } from '@mui/material';

const DetailModal = ({ isOpen, onClose, data, isLoading }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="recent-data-factors-modal"
      aria-describedby="recent-data-factors-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography id="recent-data-factors-modal" variant="h6" component="h2">
          최근 데이터 요소
        </Typography>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </Box>
    </Modal>
  );
};

export default DetailModal;