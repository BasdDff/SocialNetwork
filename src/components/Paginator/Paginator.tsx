import React, {FC, useEffect, useState} from 'react';
import styles from "./Paginator.module.scss"

interface PaginatorProps {
    currentPage: number
    totalItems: number
    pageSize: number
    onPageChanged: any
}

const Paginator: FC<PaginatorProps> = ({currentPage, totalItems, pageSize, onPageChanged}) => {

    let pagesCount = Math.ceil(totalItems / pageSize)

    //const [pages, setPages] = useState<[]>([])

    let pages: Array<number> = []

    function createPages(pages: any, pagesCount: number, currentPage: number, setPages?: () => void) {
        if (pagesCount > 10) {
            if (currentPage > 5) {
                for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                    // @ts-ignore
                    //setPages(pages => [...pages, i])
                    pages.push(i)
                    if (i === pagesCount) {
                        break
                    }
                }
            } else {
                for (let i = 0; i <= 10; i++) {
                    // @ts-ignore
                    //setPages(pages => [...pages, i])
                    pages.push(i)
                    if (i === pagesCount) {
                        break
                    }
                }
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                // @ts-ignore
                //setPages(pages => [...pages, i])
                pages.push(i)
            }
        }
    }

    // console.log(pagesCount)
    // console.log(pages)
    // @ts-ignore
    createPages(pages, pagesCount, currentPage)
    // useEffect(() => {
    //     // @ts-ignore
    //     createPages(pages, pagesCount, currentPage, setPages)
    // }, [])

    return (
        <div>
            {pages?.map((page: number) => (
                <span key={page} className={`${styles.span} border ${currentPage === page && styles.active}`} onClick={() => {
                    onPageChanged(page)
                }}>
                    {page}
                </span>
            ))}
        </div>
    );
};

export default Paginator;