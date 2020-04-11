import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import AppContext from 'src/AppContext';
import { size } from 'src/utils';

import Typography from 'Components/Typography';
import SizeChart from 'Components/SizeChart';
import Modal from 'Components/Modal';
import Table from 'Components/Table';

import ModuleTable from '../ModuleDetails/ModuleTable';

import {
  DetailsWrapper,
  SideBar,
  Body,
  ListItem,
  InfoWrapper,
  Title,
  ChunkDetailsTable,
  ChunkLink,
} from './styled';

const originHeader = [
  { key: 'moduleName', header: 'Module Name', sort: true },
  {
    key: 'request',
    header: 'Request',
    sort: true,
  },
  {
    key: 'loc',
    header: 'LOC',
  },
];

const ChunkDetails = ({ match }) => {
  const {
    params: { id },
  } = match;
  const [chunkId, setChunkID] = useState();
  const [modalData, setModalData] = useState({ visible: false });
  const { stateData } = useContext(AppContext);
  const { chunks } = stateData;

  useEffect(() => {
    setChunkID(id);
  }, [id]);

  const chunkData = chunks.find(c => `${c.id}` === `${chunkId}`);

  if (typeof id === 'undefined' || !chunkData) {
    return <Redirect to={`/chunks/${chunks[0].id}`} />;
  }

  const onClickOrigin = () => {
    setModalData({
      visible: true,
    });
  };

  const onCloseOrigin = () => {
    setModalData({
      visible: false,
    });
  };

  return (
    <DetailsWrapper>
      <Modal visible={modalData.visible} onClose={onCloseOrigin}>
        <Modal.Body minWidth="700">
          {modalData.visible && (
            <Table
              title="Origins"
              searchKey="moduleName"
              headers={originHeader}
              data={chunkData.origins}
            />
          )}
        </Modal.Body>
        <Modal.Footer center>
          <Modal.FooterButton onClick={onCloseOrigin}>Close</Modal.FooterButton>
        </Modal.Footer>
      </Modal>
      <SideBar>
        <Title variant="h5">Chunks</Title>
        {chunks.map(({ id: key, size: fileSize, names }) => (
          <ListItem
            key={key}
            active={`${key}` === `${chunkId}`}
            onClick={() => setChunkID(key)}
          >
            <InfoWrapper>
              <Typography color="info">{key}</Typography>
              <Typography weight="600" color="info">
                {size(fileSize)}
              </Typography>
            </InfoWrapper>
            <Typography varient="helpText">{names.join(' ')}</Typography>
          </ListItem>
        ))}
      </SideBar>
      <Body>
        <SizeChart id={`chunk-id-${chunkId}`} data={chunkData.modules} />
        <ChunkDetailsTable>
          <tr>
            <th>id</th>
            <td>{chunkData.id}</td>
            <th>initial</th>
            <td>{chunkData.initial ? 'Yes' : 'No'}</td>
            <th>entry</th>
            <td>{chunkData.entry ? 'Yes' : 'No'}</td>
            <th>size</th>
            <td>{size(chunkData.size)}</td>
          </tr>
          <tr>
            <th>files</th>
            <td colSpan="5">{chunkData.files.join(' , ')}</td>
            <th>hash</th>
            <td>{chunkData.hash}</td>
          </tr>
          <tr>
            <th>children</th>
            <td colSpan="3">
              {chunkData.children.map(c => (
                <ChunkLink to={`/chunks/${c}`}>{c}</ChunkLink>
              ))}
            </td>
            <th>parents</th>
            <td colSpan="3">
              {chunkData.parents.map(c => (
                <ChunkLink to={`/chunks/${c}`}>{c}</ChunkLink>
              ))}
            </td>
          </tr>
          <tr>
            <th>siblings</th>
            <td colSpan="3">
              {chunkData.siblings.map(c => (
                <ChunkLink to={`/chunks/${c}`}>{c}</ChunkLink>
              ))}
            </td>
            <th>origins</th>
            <td colSpan="3">
              <Typography color="info" cursor="pointer" onClick={onClickOrigin}>
                show origins
              </Typography>
            </td>
          </tr>
        </ChunkDetailsTable>
        <ModuleTable
          title={`Modules (${chunkData.modules.length})`}
          data={chunkData.modules}
        />
      </Body>
    </DetailsWrapper>
  );
};

export default ChunkDetails;