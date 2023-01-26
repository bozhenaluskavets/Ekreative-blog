import styled from 'styled-components';

export const StyledPaginateContainer = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .pagination {
    color: #0366d6;
    display: flex;
    list-style-type: none;
    cursor: pointer;
    font-size: 20px;
  }
  .active {
    background-color: rgb(234, 234, 234);
  }
  a {
    padding: 5px;
    :hover {
      color: gray;
    }
  }
`;
