import {useMemo} from "react";

export const useInclude = (items: any, query: string) => {

    const sortedItems = useMemo(() => {
        return items.filter((item: any) => item.email.toLowerCase().includes(query.toLowerCase()))
    }, [items, query])

    return sortedItems
}