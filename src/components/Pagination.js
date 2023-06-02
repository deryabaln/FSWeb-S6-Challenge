import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationStyle = (props) => {
    const { getPreviousPage, handleChangePage, getNextPage, firstPage, lastPage } = props;

    return (
        <Pagination className='pagination' style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}>
            <PaginationItem onClick={firstPage} style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}>
                <PaginationLink style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}
                    first
                    href="#"
                />
            </PaginationItem>
            <PaginationItem onClick={getPreviousPage} style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}>
                <PaginationLink style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}
                    href="#"
                    previous
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage} style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}>
                    1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage} style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}>
                    2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage} style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}>
                    3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage} style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}>
                    4
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" onClick={handleChangePage} style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}>
                    5
                </PaginationLink>
            </PaginationItem>
            <PaginationItem onClick={getNextPage} style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}>
                <PaginationLink style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}
                    href="#"
                    next
                />
            </PaginationItem>
            <PaginationItem onClick={lastPage} style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}>
                <PaginationLink style={{ backgroundColor: 'hsl(0, 5%, 8%)', color: 'antiquewhite' }}
                    href="#"
                    last
                />
            </PaginationItem>
        </Pagination>
    )
};

export default PaginationStyle