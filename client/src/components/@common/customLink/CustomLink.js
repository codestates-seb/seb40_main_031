import React from 'react';
import StyledLink from 'components/@common/customLink/CustomLink.style';

const CustomLink = ({ className, path, children, ...rest }) => {
  return (
    <StyledLink className={className} to={path} {...rest}>
      {children}
    </StyledLink>
  );
};

export default CustomLink;
