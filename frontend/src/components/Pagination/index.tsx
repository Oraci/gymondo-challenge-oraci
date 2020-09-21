import React, { ReactElement } from 'react';

import { Container, Content } from './styles';

interface PaginationProps {
  totalPages: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination(props: PaginationProps): ReactElement {
  const { totalPages, totalItems, currentPage, onPageChange } = props;

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <Container>
      <Content>
        <div>
          <button
            type="button"
            onClick={(): false | void =>
              hasPreviousPage && onPageChange(currentPage - 1)
            }
            disabled={!hasPreviousPage}
          >
            prev
          </button>
          {currentPage} of {totalPages}
          <button
            type="button"
            onClick={(): false | void =>
              hasNextPage && onPageChange(currentPage + 1)
            }
            disabled={!hasNextPage}
          >
            next
          </button>
        </div>
        <div>{`Records ${totalItems}`}</div>
      </Content>
    </Container>
  );
}

export default Pagination;
