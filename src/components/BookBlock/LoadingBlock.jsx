import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return(
        <ContentLoader 
        speed={2}
        width={324}
        height={695}
        viewBox="0 0 324 695"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="20" y="20" rx="0" ry="0" width="284" height="436" /> 
        <rect x="20" y="476" rx="6" ry="6" width="284" height="28" /> 
        <rect x="20" y="514" rx="6" ry="6" width="284" height="30" /> 
        <rect x="132" y="544" rx="6" ry="6" width="60" height="22" /> 
        <rect x="60" y="576" rx="6" ry="6" width="204" height="80" /> 
        {/* <rect x="66" y="576" rx="0" ry="0" width="80" height="27" /> 
        <rect x="156" y="576" rx="0" ry="0" width="38" height="38" /> 
        <rect x="199" y="576" rx="0" ry="0" width="38" height="38" /> 
        <rect x="102" y="624" rx="0" ry="0" width="119" height="38" /> */}
      </ContentLoader>
    )
}

export default LoadingBlock;
