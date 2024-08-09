import React from 'react';
import { Typography, TableCell, TableHead, TableRow, useMediaQuery, useTheme } from '@mui/material';

const TableHeader = ({ isMobile }) => {
  const theme = useTheme();
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));

  const headers = isMobile 
    ? [
        { label: '순위', width: '15%' },
        { label: '상권/업종', width: '40%' },
        { label: '예상 월 매출액', width: '25%' },
        { label: '임대료 수준', width: '20%' }
      ]
    : [
        { label: '순위', width: '10%' },
        { label: '상권', width: '25%' },
        { label: '업종', width: '25%' },
        { label: '예상 월 매출액', width: '20%' },
        { label: '임대료 수준', width: '20%' }
      ];

  return (
    <TableHead>
      <TableRow>
        {headers.map((header, index) => (
          <TableCell 
            key={index}
            align="center"
            sx={{ 
              width: header.width,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              padding: isMobile ? '8px 4px' : '16px',
            }}
          >
            <Typography
              variant={isMobile ? (isVerySmall ? 'caption' : 'body2') : 'body1'}
              component="div"
              sx={{
                fontWeight: 'bold',
                fontSize: isMobile ? (isVerySmall ? '0.65rem' : '0.75rem') : 'inherit',
              }}
            >
              {header.label}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;