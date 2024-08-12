import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import CountUp from 'react-countup';

const Sales = ({ sales, rent }) => {
  return (
    <Box className="flex justify-center my-4">
      <Card className="w-full max-w-[701px] bg-[#f7f9fc]">
        <CardContent>
          <Box className="flex flex-col sm:flex-row justify-between items-center px-20">
            <Box className="text-center mb-4 sm:mb-0">
              <Typography variant="subtitle1" className="text-[#79819a]">
                예상 매출액
              </Typography>
              <Typography variant="h5" className="font-bold text-[#4CAF50]">
                <CountUp end={sales} suffix="만원" separator="," />
              </Typography>
            </Box>
            <Box className="text-center">
              <Typography variant="subtitle1" className="text-[#79819a]">
                예상 임대료
              </Typography>
              <Typography variant="h5" className="font-bold text-[#2196F3]">
                <CountUp end={rent} suffix="만원/㎡" separator="," decimals={1} />
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Sales;