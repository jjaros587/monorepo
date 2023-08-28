import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import { Inline, Box } from '@ui';
import { useMemo, useState } from 'react';
import { MeiliSearch } from 'meilisearch';
import { useRouter } from 'next/navigation';
import styled, { css } from '@theme';

const SearchBox = styled.div<{ isOpened: boolean }>`
  position: relative;
  height: 60px;
  width: 0px;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${(p) =>
    p.isOpened &&
    css`
      width: 350px;
    `}
`;

const SearchButton = styled(FontAwesomeIcon)``;

const SIZE = '15px';

export const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  const router = useRouter();

  const search = () => {
    debugger;
    window.location.replace(`/search?search=${searchValue}`);
  };

  return (
    <div>
      <Inline alignY="center">
        {isOpened && (
          <TextField
            id="filled-basic"
            label="Search"
            variant="filled"
            size="small"
            placeholder="Search"
            autoFocus
            onChange={(value) => setSearchValue(value.target.value)}
          />
        )}

        <Box style={{ width: SIZE, height: '100%' }}>
          <SearchButton
            icon={faMagnifyingGlass}
            onClick={() => setIsOpened(true)}
          />
        </Box>
      </Inline>
    </div>
  );
};
