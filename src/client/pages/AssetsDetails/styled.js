import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { NavLink } from 'react-router-dom';

import Typography from 'Components/Typography';

export const DetailsWrapper = styled.div`
  flex: 1;
  display: flex;
  min-height: 0;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-right: 1px solid ${props => props.theme.palette.cardBorderColor};
`;

export const Body = styled.div`
  flex: 1;
  overflow: auto;
  padding: 32px;
`;

export const Title = styled(Typography)`
  padding: 16px;
`;

export const ListItem = styled(NavLink)`
  display: inline-flex;
  padding: 12px 16px;
  border-bottom: 1px solid ${props => props.theme.palette.cardBorderColor};
  cursor: pointer;

  &:first-of-type {
    border-top: 1px solid ${props => props.theme.palette.cardBorderColor};
  }

  ${props =>
    props.color &&
    css`
      color: ${props.theme.palette[props.color]};
    `}

  &.active, &:hover {
    background-color: ${props => props.theme.palette.hover};
  }
`;

export const InfoWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 14px;
`;
