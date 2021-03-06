import {FC} from "react"

const LIMIT = 10

interface IPeoplePagination {
    page: number,
    total: number,
    onChange: (item :any) => any
}

export const  PeoplePagination :  FC<IPeoplePagination> = ({
                                                  page,
                                                  total,
                                                  onChange = () => {}
                                              }) => {
    const totalPages = Math.ceil(total / LIMIT);

    return (
        <div style={{margin: '10px auto', textAlign: 'center'}}>
            {Array
                .from({length: totalPages},
                    (_, index) => index + 1)
                .map(pageIndex => {
                    const isActive = pageIndex === page;
                    const action = () => {
                        if (pageIndex !== page) {
                            onChange(pageIndex);
                        }
                    };

                    return isActive ? (
                        <b key={pageIndex} onClick={action}>
                            {' '}{pageIndex}{' '}
                        </b>
                    ) : (
                        <span key={pageIndex} onClick={action}>
                            {' '}{pageIndex}{' '}
                        </span>
                    );
                })
            }
        </div>
    )
}
export default PeoplePagination