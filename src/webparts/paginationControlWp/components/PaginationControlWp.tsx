import * as React from 'react';
import { Pagination } from "@pnp/spfx-controls-react/lib/pagination";

const PaginationControlWp: React.FC = () => {
 
  const _getPage = (page: number) => {
  console.log('Page:', page);
};
  
  return (
    
   
   
    <Pagination
  currentPage={3}
  totalPages={13} 
  onChange={(page) => _getPage(page)}
  limiter={3} // Optional - default value 3
  hideFirstPageJump // Optional
  hideLastPageJump // Optional
  limiterIcon={"Emoji12"} // Optional
/>
  );
};

export default PaginationControlWp;   