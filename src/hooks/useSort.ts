import {useMemo} from "react";

export const useSort = (items: any, sort: string) => {

    const sortedItems = useMemo(() => {
        if (sort) {
            // @ts-ignore
            return [...items].sort((a, b) => a[sort]?.localeCompare(b[sort]))
        }

        return items
    }, [items, sort])

    return sortedItems
}