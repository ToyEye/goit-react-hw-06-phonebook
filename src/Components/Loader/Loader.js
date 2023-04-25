import styled from 'styled-components';
import { MutatingDots } from 'react-loader-spinner';

const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;
export { LoaderContainer };

export const LoaderSimbol = () => {
  return (
    <LoaderContainer>
      <MutatingDots
        type="MutatingDots"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={1000}
        secondaryColor="red"
      />
    </LoaderContainer>
  );
};
