import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';

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

export const ListItem = styled.div`
  min-width: 150px;
  padding: 12px 16px;
  border-bottom: 1px solid ${props => props.theme.palette.cardBorderColor};
  cursor: pointer;

  &:first-of-type {
    border-top: 1px solid ${props => props.theme.palette.cardBorderColor};
  }

  ${props =>
    props.active &&
    css`
      background-color: ${props.theme.palette.hover};
    `}

  &:hover {
    background-color: ${props => props.theme.palette.hover};
  }
`;

export const InfoWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`;

export const ChunkDetailsTable = styled.table`
  width: 100%;
  font-size: 12px;
  border-collapse: collapse;
  margin: 16px 0 30px 0;

  tr {
    border-bottom: 1px solid ${props => props.theme.rgbaColor(0.04)};

    &:first-of-type {
      border-top: 1px solid ${props => props.theme.rgbaColor(0.04)};
    }
  }

  td {
    word-break: unset;
  }

  th {
    white-space: nowrap;
    background: ${props => props.theme.rgbaColor(0.04)};
  }

  th,
  td {
    padding: 8px;

    &:first-child {
      border-left: 1px solid ${props => props.theme.rgbaColor(0.04)};
    }

    &:last-child {
      border-right: 1px solid ${props => props.theme.rgbaColor(0.04)};
    }
  }
`;

export const ChunkLink = styled(Link)`
  margin: 0 4px;
  padding: 4px 8px;
  border-radius: 3px;
  color: ${props => props.theme.palette.white};
  background: ${props => props.theme.palette.info};
`;