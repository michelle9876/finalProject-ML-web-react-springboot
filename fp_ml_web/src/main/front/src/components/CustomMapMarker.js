const CustomMapMarker = ({ title1, rank, title2, windowWidth, color }) => {
    const isMobile = windowWidth < 768;
    const fontSize = isMobile ? '0.6rem' : '0.7rem';
    const padding = isMobile ? '0.2rem' : '0.3rem';
    const width = isMobile ? '3.5rem' : '4.0rem';
    // rank의 폰트 크기
    const rankFontSize = isMobile ? '0.7rem' : '1.5rem'; 
    // 상권 이름 줄이기
    const shortenedTitle2 = title2.length > 4 ? title2.slice(0, 4) + '..' : title2;
  
 
  
    return `
      <div style="
        background-color: ${color};
        color: white;
        padding: ${padding};
        border-radius: 4px;
        font-size: ${fontSize};
        text-align: center;
        width: ${width};
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      ">
        <div style="font-weight: bold; margin-bottom: 2px;">${title1}</div>
        <div style="font-size: ${rankFontSize}; margin-bottom: 2px;">${rank}등</div>
        <div style="font-size: 0.8em;">${title2}</div>
      </div>
    `;
  };
  
  export default CustomMapMarker;