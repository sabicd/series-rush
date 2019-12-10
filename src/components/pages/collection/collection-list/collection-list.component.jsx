import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import ChipArray from '../../../commons/chip-array/chip-array.component';

const CollectionList = ({ groups, selectedGroup, collectionSelectGroup }) => {
  const { listType } = useParams();

  return (
    <Box>
      <ChipArray
        items={groups}
        breakpoint="xs"
        selected={selectedGroup}
        onClick={key => collectionSelectGroup(listType, key)}
      />
    </Box>
  );
};

CollectionList.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
  collectionSelectGroup: PropTypes.func.isRequired,
  selectedGroup: PropTypes.string,
};

CollectionList.defaultProps = {
  selectedGroup: '',
};

export default CollectionList;
