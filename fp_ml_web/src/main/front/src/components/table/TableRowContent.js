import React from 'react';
import { Typography, TableCell, TableRow,  Box, useMediaQuery, useTheme, Chip } from '@mui/material';


const LocationIcon = () => (
  <img 
    src="/basic/location304_12566.png" 
    alt="위치 아이콘" 
    style={{ 
      width: '16px', 
      height: '16px', 
      marginRight: '2px',
      marginTop: '2px',
      verticalAlign: 'middle'
    }} 
  />
);

const getRentLabel = (rent) => {
  if (rent >= 50) return "상";
  if (rent >= 37) return "중";
  return "하";
}

const getRentLabelColor = (label) => {
  switch(label) {
    case "상": return "error";
    case "중": return "warning";
    case "하": return "success";
    default: return "default";
  }
}

const RentLevelChip = ({ rent, isMobile }) => {
  const theme = useTheme();
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));
  const label = getRentLabel(rent);
  const color = getRentLabelColor(label);
  const rentInTenThousand = (rent / 10).toFixed(1);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Chip 
        label={label} 
        color={color}
        size={isMobile ? "small" : "medium"}
      />
      <Typography 
        variant={isMobile ? (isVerySmall ? 'caption' : 'body2') : 'body1'} 
        sx={{ mt: 0.5, fontSize: isMobile ? (isVerySmall ? '0.6rem' : '0.7rem') : 'inherit' }}
      >
        평균{rentInTenThousand}만원/㎡
      </Typography>
    </Box>
  );
};

const TableRowContent = ({ data, isMobile }) => {
  const theme = useTheme();
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));
  const salesInTenThousand = Math.round(data.predictedSales / 10000).toLocaleString();

  return (
    <TableRow>
      <TableCell align="center" sx={{ width: isMobile ? '15%' : '10%', padding: isMobile ? '8px 4px' : '16px' }}>
        <Typography variant={isMobile ? (isVerySmall ? 'caption' : 'body2') : 'body1'}>
          {data.ranking}위
        </Typography>
      </TableCell>
      {!isMobile && (
        <TableCell align="center" sx={{ width: '25%' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <LocationIcon />
          <Typography variant="body1">{data.businessDistrict}</Typography>
        </Box>
      </TableCell>
      )}
      <TableCell align="center" sx={{ width: isMobile ? '40%' : '25%', padding: isMobile ? '8px 4px' : '16px' }}>
        {isMobile ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
              <LocationIcon />
              <Typography variant={isVerySmall ? 'caption' : 'body2'} align="left">
                {data.businessDistrict}
              </Typography>
            </Box>
            <Typography variant={isVerySmall ? 'caption' : 'body2'} align="left">
              {data.serviceType}
            </Typography>
          </Box>
        ) : (
          <Typography variant="body1">{data.serviceType}</Typography>
        )}
      </TableCell>
      <TableCell align="center" sx={{ width: isMobile ? '25%' : '20%', padding: isMobile ? '8px 4px' : '16px' }}>
        <Typography variant={isMobile ? (isVerySmall ? 'caption' : 'body2') : 'body1'}>
          {salesInTenThousand}만원
        </Typography>
      </TableCell>
      <TableCell align="center" sx={{ width: '20%', padding: isMobile ? '8px 4px' : '16px' }}>
        <RentLevelChip rent={data.rent} isMobile={isMobile} />
      </TableCell>
    </TableRow>
  );
};

export default TableRowContent;