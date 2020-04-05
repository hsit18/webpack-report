import React, { useContext } from 'react';
import AppContext from 'src/AppContext';

import StatisticsCard from 'Components/StatisticsCard';
import WarningIcon from 'Components/Icons/Warning';
import CloseCircleIcon from 'Components/Icons/CloseCircle';
import TimeIcon from 'Components/Icons/Time';

import { ASSETS_TYPE } from 'src/const';

import { size, timeConversion } from 'src/utils';

import { StatisticsWrapper } from './styled';

const Statistics = () => {
  const { stateData } = useContext(AppContext);
  const { errors, warnings, time, dashboardState } = stateData;

  return (
    <StatisticsWrapper>
      <StatisticsCard
        to="/info/warnings"
        icon={<WarningIcon width="2.3rem" />}
        color="warning"
        header="Warnings"
        text={warnings.length}
      />
      <StatisticsCard
        to="/info/errors"
        icon={<CloseCircleIcon width="2.3rem" />}
        color="error"
        header="Errors"
        text={errors.length}
      />
      <StatisticsCard
        icon={<TimeIcon width="2.3rem" />}
        color="info"
        header="Build Time"
        text={timeConversion(time)}
      />
      {ASSETS_TYPE.map(
        ({ key, displayName, icon: Icon, iconWidth = '2.3rem', ...props }) => (
          <StatisticsCard
            key={key}
            to={`/assets/${key}`}
            icon={<Icon width={iconWidth} />}
            header={displayName}
            text={size(dashboardState[key].size)}
            color="info"
            {...props}
          />
        ),
      )}
    </StatisticsWrapper>
  );
};

export default Statistics;
