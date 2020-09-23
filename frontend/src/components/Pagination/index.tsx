import React, { ReactElement } from 'react';

import { Container, Content, Button } from './styles';

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
        <>
          {totalItems > 20 && (
            <>
              <Button
                type="button"
                onClick={(): false | void =>
                  hasPreviousPage && onPageChange(currentPage - 1)
                }
                disabled={!hasPreviousPage}
              >
                prev
              </Button>
              {currentPage} of {totalPages}
              <Button
                type="button"
                onClick={(): false | void =>
                  hasNextPage && onPageChange(currentPage + 1)
                }
                disabled={!hasNextPage}
              >
                next
              </Button>
            </>
          )}
        </>
        {totalItems > 0 && (
          <div>
            <strong>{`Total records: ${totalItems}`}</strong>
          </div>
        )}
      </Content>
    </Container>
  );
}

export default Pagination;
